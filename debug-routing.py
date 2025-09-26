#!/usr/bin/env python3
from playwright.sync_api import sync_playwright
import time

def debug_routing():
    with sync_playwright() as p:
        # Launch browser in non-headless mode so you can see it
        browser = p.chromium.launch(headless=False, slow_mo=1000)
        page = browser.new_page()
        
        try:
            print("🌐 Testing different routes...")
            
            # Test various route patterns
            routes_to_test = [
                "http://127.0.0.1:8080/kb-demo",
                "http://127.0.0.1:8080/kb-demo/",
                "http://127.0.0.1:8080/kb-demo.html",
                "http://127.0.0.1:8080/kb-demo/index.html"
            ]
            
            for route in routes_to_test:
                print(f"\n📍 Testing route: {route}")
                try:
                    response = page.goto(route, timeout=10000)
                    print(f"   Status: {response.status}")
                    print(f"   URL: {page.url}")
                    
                    if response.status == 200:
                        title = page.title()
                        print(f"   Title: {title}")
                        
                        # Check if this is the demo page
                        if "Productivity Accelerator" in title:
                            print(f"   ✅ DEMO PAGE LOADED SUCCESSFULLY!")
                            
                            # Take screenshot
                            page.screenshot(path=f"route-test-{route.split('/')[-1] or 'root'}.png")
                            print(f"   📸 Screenshot saved")
                            
                            # Keep browser open for 10 seconds for inspection
                            print("   🔍 Browser will stay open for 10 seconds for inspection...")
                            time.sleep(10)
                        else:
                            print(f"   ❌ Wrong page loaded")
                    else:
                        print(f"   ❌ Failed to load (status: {response.status})")
                        
                except Exception as e:
                    print(f"   ❌ Error: {e}")
                    
                time.sleep(2)  # Brief pause between tests
            
            print(f"\n🔍 Directory listing check...")
            # Check what's actually in the directory
            try:
                page.goto("http://127.0.0.1:8080/", timeout=5000)
                content = page.content()
                if "kb-demo" in content:
                    print("   ✅ kb-demo directory visible in root")
                else:
                    print("   ❌ kb-demo directory not visible in root")
                    
                time.sleep(5)  # Keep browser open for final inspection
                
            except Exception as e:
                print(f"   ❌ Error checking directory: {e}")
            
        finally:
            print(f"\n🏁 Routing debug completed. Browser will close in 5 seconds...")
            time.sleep(5)
            browser.close()

if __name__ == "__main__":
    debug_routing()