import asyncio
from playwright.async_api import async_playwright
import os
import json

async def download_image(page, url, filepath):
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
            size = os.path.getsize(filepath)
            print(f"Downloaded {filepath} ({size} bytes)")
            return size > 5000
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return False

# Top 10 new candidate images discovered across posts 11, 12, and carousel slides of earlier posts
candidate_new_images = [
    # 1. Post DdtOOglERjx (Post 11 on feed) - Slide 1
    {
        "shortcode": "DdtOOglERjx",
        "postUrl": "https://www.instagram.com/p/DdtOOglERjx/",
        "cdn_id": "824759761",
        "description": "Graphic Wearable Edition on model in Athens studio setting",
        "title": 'OVERSIZED STUDIO TEE — "RADIANT PULSE"',
        "category": "tshirts",
        "archetype": "radients",
    },
    # 2. Post DdtOOglERjx - Slide 2
    {
        "shortcode": "DdtOOglERjx",
        "postUrl": "https://www.instagram.com/p/DdtOOglERjx/",
        "cdn_id": "825251442",
        "description": "Textile detail showing screenprint texture and alien anatomical lines",
        "title": 'SILKSCREEN ARTIFACT — "TACTILE ANATOMY"',
        "category": "drawings",
        "archetype": "radients",
    },
    # 3. Post DdtOOglERjx - Slide 3
    {
        "shortcode": "DdtOOglERjx",
        "postUrl": "https://www.instagram.com/p/DdtOOglERjx/",
        "cdn_id": "824759742",
        "description": "Editorial drape and silhouette study in natural morning light",
        "title": 'ARCHIVAL GARMENT — "DRAPED FORM"',
        "category": "tshirts",
        "archetype": "orients",
    },
    # 4. Post DdtOOglERjx - Slide 4
    {
        "shortcode": "DdtOOglERjx",
        "postUrl": "https://www.instagram.com/p/DdtOOglERjx/",
        "cdn_id": "823606326",
        "description": "Hand-stitched label detail and fabric weave",
        "title": 'STUDIO EMBROIDERY — "ATELIER CODE"',
        "category": "drawings",
        "archetype": "orients",
    },
    # 5. Post Ddq1X3BiP4B (Post 12 on feed) - Slide 1
    {
        "shortcode": "Ddq1X3BiP4B",
        "postUrl": "https://www.instagram.com/p/Ddq1X3BiP4B/",
        "cdn_id": "819714553",
        "description": "Handmade sculptural ceramic vessel with bio-erotic contours",
        "title": 'CERAMIC TOTEM — "CORPOREAL VESSEL"',
        "category": "ceramics",
        "archetype": "certiens",
    },
    # 6. Post Ddq1X3BiP4B - Slide 2
    {
        "shortcode": "Ddq1X3BiP4B",
        "postUrl": "https://www.instagram.com/p/Ddq1X3BiP4B/",
        "cdn_id": "820852827",
        "description": "Textured ceramic surface close-up revealing natural mineral glaze",
        "title": 'MINERAL SCULPTURE — "RAW FLESH TEXTURE"',
        "category": "ceramics",
        "archetype": "certiens",
    },
    # 7. Post Ddq1X3BiP4B - Slide 3
    {
        "shortcode": "Ddq1X3BiP4B",
        "postUrl": "https://www.instagram.com/p/Ddq1X3BiP4B/",
        "cdn_id": "819629650",
        "description": "Sculptural vessel alongside handmade canvas bag in Athens sunlight",
        "title": 'COMPOSITION NO. 12 — "VESSEL & TOTES"',
        "category": "bags",
        "archetype": "naviens",
    },
    # 8. Post Ddq1X3BiP4B - Slide 4
    {
        "shortcode": "Ddq1X3BiP4B",
        "postUrl": "https://www.instagram.com/p/Ddq1X3BiP4B/",
        "cdn_id": "820308035",
        "description": "Detailed ceramic opening showing hand-pinched rim and alien figure marks",
        "title": 'CERAMIC RECEPTACLE — "SACRED NODE"',
        "category": "ceramics",
        "archetype": "lviens",
    },
    # 9. Post Dd18FmfERT0 (Post 7 carousel) - Slide 2
    {
        "shortcode": "Dd18FmfERT0",
        "postUrl": "https://www.instagram.com/p/Dd18FmfERT0/",
        "cdn_id": "828776553",
        "description": "Triple-eye cast bronze talisman detail draped on torso neckline",
        "title": 'TALISMAN CLOSE-UP — "TRIPLE EYE OF RADIENTS"',
        "category": "ceramics",
        "archetype": "radients",
    },
    # 10. Post Ddt0mJuiHJG (Post 10 carousel) - Slide 2
    {
        "shortcode": "Ddt0mJuiHJG",
        "postUrl": "https://www.instagram.com/p/Ddt0mJuiHJG/",
        "cdn_id": "822036200",
        "description": "Bio-pelvic magenta entity print in macro focus showing ink density",
        "title": 'PLASTISOL MACRO PRINT — "ORGANIC ROTATION"',
        "category": "drawings",
        "archetype": "naviens",
    },
]

async def main():
    os.environ["PLAYWRIGHT_BROWSERS_PATH"] = "/root/.cache/ms-playwright"
    with open("post_images_scraped.json") as f:
        scraped = json.load(f)
        
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            viewport={"width": 1280, "height": 1000}
        )
        page = await context.new_page()
        # open instagram once so domain session is active
        await page.goto("https://www.instagram.com/mmalouz/", wait_until="networkidle")
        for selector in ["button:has-text('Decline optional cookies')", "button:has-text('Allow all cookies')"]:
            b = await page.query_selector(selector)
            if b:
                await b.click()
                await page.wait_for_timeout(1000)
                break
                
        results = []
        for i, item in enumerate(candidate_new_images):
            sc = item["shortcode"]
            cdn_id = item["cdn_id"]
            img_list = scraped.get(sc, [])
            target_url = None
            for x in img_list:
                if cdn_id in x["src"]:
                    target_url = x["src"]
                    break
            if not target_url:
                print(f"Warning: could not find url for {cdn_id} in {sc}")
                continue
                
            out_file = f"public/images/instagram/insta_{i+11:02d}.jpg"
            print(f"Downloading insta_{i+11:02d}.jpg from {sc} ({cdn_id})...")
            success = await download_image(page, target_url, out_file)
            results.append({
                "index": i + 11,
                "file": out_file,
                "url": target_url,
                "postUrl": item["postUrl"],
                "success": success,
                "meta": item
            })
            
        with open("download_10_more_results.json", "w") as f:
            json.dump(results, f, indent=2)
            
        print("Done downloading 10 more images!")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
