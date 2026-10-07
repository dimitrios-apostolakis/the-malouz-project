import asyncio
from playwright.async_api import async_playwright
import os
import json

async def download_image(page, url, filepath):
    # Use page.evaluate to fetch image as base64 within browser context (avoids CDN blocking)
    js = """
    async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }
    """
    try:
        data_url = await page.evaluate(js, url)
        if data_url and ',' in data_url:
            import base64
            header, encoded = data_url.split(',', 1)
            with open(filepath, 'wb') as f:
                f.write(base64.b64decode(encoded))
            print(f"Downloaded {filepath} ({os.path.getsize(filepath)} bytes)")
            return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return False

async def main():
    os.makedirs("public/images/instagram", exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            viewport={"width": 1280, "height": 1000}
        )
        page = await context.new_page()
        print("Navigating to mmalouz Instagram...")
        await page.goto("https://www.instagram.com/mmalouz/", wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(2000)
        
        post_links = await page.query_selector_all("a[href*='/p/']")
        print(f"Found {len(post_links)} post links on page")
        
        posts_data = []
        for i in range(min(10, len(post_links))):
            a = post_links[i]
            href = await a.get_attribute("href")
            img = await a.query_selector("img")
            if not img:
                continue
            src = await img.get_attribute("src")
            alt = await img.get_attribute("alt") or ""
            
            # If srcset exists, take highest resolution URL
            srcset = await img.get_attribute("srcset") or ""
            best_src = src
            if srcset:
                parts = srcset.split(",")
                if parts:
                    best_src = parts[-1].strip().split(" ")[0]
            
            filepath = f"public/images/instagram/insta_{i+1:02d}.jpg"
            success = await download_image(page, best_src, filepath)
            
            posts_data.append({
                "index": i + 1,
                "postUrl": f"https://www.instagram.com{href}" if href.startswith("/") else href,
                "localPath": f"/images/instagram/insta_{i+1:02d}.jpg",
                "alt": alt,
                "downloaded": success,
            })
        
        with open("public/images/instagram/manifest.json", "w") as f:
            json.dump(posts_data, f, indent=2)
        print("Saved manifest.json with 10 downloaded posts!")
        await browser.close()

os.environ["PLAYWRIGHT_BROWSERS_PATH"] = "/root/.cache/ms-playwright"
asyncio.run(main())
