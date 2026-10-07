#!/usr/bin/env node
/**
 * vercel-ignore-build-step.js
 *
 * Intercepts automatic Vercel webhook builds on git push.
 * Exit codes:
 *   - 0: Cancel build (tells Vercel to ignore this build).
 *   - 1: Proceed with build (tells Vercel to proceed).
 */

function getCommitMessage(env = process.env) {
  return (
    env.VERCEL_GIT_COMMIT_MESSAGE ||
    env.COMMIT_MESSAGE ||
    ''
  ).trim();
}

function shouldSkipBuild(commitMsg) {
  if (!commitMsg) return false;
  const skipPatterns = [
    /\[skip-vercel\]/i,
    /\[skip-deploy\]/i,
    /\[skip\s+ci\]/i,
  ];
  return skipPatterns.some((pattern) => pattern.test(commitMsg));
}

function evaluateBuildDecision(env = process.env) {
  const commitMsg = getCommitMessage(env);

  // 1. Explicit skip flags
  if (shouldSkipBuild(commitMsg)) {
    return {
      proceed: false,
      exitCode: 0,
      reason: 'Commit message contains skip flag ([skip-vercel] or [skip-deploy])',
    };
  }

  // 2. Forced build override (passed via --build-env VERCEL_FORCE_BUILD=1 from GitHub Actions or CLI)
  if (env && (env.VERCEL_FORCE_BUILD === '1' || env.FORCE_BUILD === '1')) {
    return {
      proceed: true,
      exitCode: 1,
      reason: 'Forced build override detected (VERCEL_FORCE_BUILD=1 from CI runner)',
    };
  }

  // 3. In Vite / static projects without backend gates, allow initial production deployments on main branch
  if (env.VERCEL_GIT_COMMIT_REF === 'main' || env.VERCEL_ENV === 'production') {
    return {
      proceed: true,
      exitCode: 1,
      reason: 'Production branch deployment allowed',
    };
  }

  // 4. Default: Cancel raw automatic git push webhook to wait for GitHub Actions CI
  return {
    proceed: false,
    exitCode: 0,
    reason: 'Automatic Vercel git push build intercepted. Gated behind test pipeline.',
  };
}

function main() {
  const decision = evaluateBuildDecision(process.env);
  if (decision.proceed) {
    console.log(`✅ [vercel-ignore-build-step] ${decision.reason}`);
    process.exit(decision.exitCode);
  } else {
    console.log(`🛑 [vercel-ignore-build-step] ${decision.reason}. Cancelling premature build.`);
    process.exit(decision.exitCode);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { evaluateBuildDecision, shouldSkipBuild, getCommitMessage };
