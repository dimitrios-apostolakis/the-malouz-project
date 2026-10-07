import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🧪 RUNNING SYSTEM VERIFICATION TESTS FOR THE MALOUZ PROJECT');

// 1. Verify dist files exist
const distHtml = path.join(rootDir, 'dist', 'index.html');
if (!fs.existsSync(distHtml)) {
  console.error('❌ dist/index.html not found! Run npm run build first.');
  process.exit(1);
}
console.log('✅ 1. Production build bundle verified (dist/index.html exists)');

// 2. Verify Archetypes Data integrity
const archetypesFile = fs.readFileSync(path.join(rootDir, 'src', 'data', 'alienArchetypes.ts'), 'utf-8');
const requiredArchetypes = ['radients', 'orients', 'naviens', 'certiens', 'lviens'];
for (const arch of requiredArchetypes) {
  if (!archetypesFile.toLowerCase().includes(arch)) {
    console.error(`❌ Missing archetype: ${arch}`);
    process.exit(1);
  }
}
console.log(`✅ 2. All 5 sexual alien archetypes present (${requiredArchetypes.join(', ')})`);

// 3. Verify Product Catalog
const productsFile = fs.readFileSync(path.join(rootDir, 'src', 'data', 'products.ts'), 'utf-8');
const requiredCategories = ['tshirts', 'ceramics', 'bags', 'drawings'];
for (const cat of requiredCategories) {
  if (!productsFile.includes(`'${cat}'`)) {
    console.error(`❌ Missing category: ${cat}`);
    process.exit(1);
  }
}
console.log(`✅ 3. All 4 product categories present (${requiredCategories.join(', ')})`);

// 4. Verify Instagram handle presence
if (!productsFile.includes('@mmalouz') && !fs.readFileSync(path.join(rootDir, 'src', 'components', 'Navbar.tsx'), 'utf-8').includes('@mmalouz')) {
  console.error('❌ Artist Instagram handle @mmalouz missing in codebase');
  process.exit(1);
}
console.log('✅ 4. Artist profile @mmalouz integrated across components');

// 5. Verify Vercel config
const vercelJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'vercel.json'), 'utf-8'));
if (vercelJson.framework !== 'vite' || vercelJson.outputDirectory !== 'dist') {
  console.error('❌ Invalid vercel.json configuration');
  process.exit(1);
}
console.log('✅ 5. Vercel edge deployment config verified');

console.log('==================================================');
console.log('🎉 ALL 5 VERIFICATION SUITES PASSED (100% GREEN)');
console.log('==================================================');
