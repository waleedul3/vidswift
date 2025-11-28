# How to Get Fresh YouTube Cookies

YouTube requires authentication cookies to bypass bot detection. Follow these steps to get fresh cookies:

## Method 1: Using Browser Extension (Recommended)

### For Chrome/Edge:
1. Install the **"Get cookies.txt LOCALLY"** extension from the Chrome Web Store
   - Link: https://chrome.google.com/webstore/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc

2. Go to YouTube.com and make sure you're logged in

3. Click the extension icon in your browser toolbar

4. Click "Export" to download the cookies.txt file

5. Replace the `backend/cookies.txt` file with the newly downloaded file

### For Firefox:
1. Install the **"cookies.txt"** extension
   - Link: https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/

2. Go to YouTube.com and make sure you're logged in

3. Click the extension icon

4. Click "Export" to download cookies.txt

5. Replace the `backend/cookies.txt` file with the newly downloaded file

## Method 2: Using yt-dlp Command (Alternative)

If you have a browser installed, you can use yt-dlp to extract cookies directly:

```bash
# For Chrome
yt-dlp --cookies-from-browser chrome --cookies cookies.txt "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

# For Firefox
yt-dlp --cookies-from-browser firefox --cookies cookies.txt "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

# For Edge
yt-dlp --cookies-from-browser edge --cookies cookies.txt "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

This will create a fresh `cookies.txt` file in your current directory.

## After Getting Fresh Cookies

1. Replace `backend/cookies.txt` with your new cookies file

2. Commit and push the changes:
   ```bash
   git add backend/cookies.txt
   git commit -m "Update YouTube cookies"
   git push
   ```

3. Wait for Render to redeploy (2-5 minutes)

4. Test your application again

## Important Notes

- **Security**: Never share your cookies.txt file publicly as it contains your authentication tokens
- **Expiration**: Cookies typically expire after a few weeks/months, so you may need to refresh them periodically
- **Privacy**: Make sure you're logged into YouTube with an account you're comfortable using for this purpose
- **Git**: Consider adding `cookies.txt` to `.gitignore` if you're concerned about security (but then you'll need to manually upload it to Render)

## Troubleshooting

If you still get bot detection errors after updating cookies:

1. Make sure you're logged into YouTube in your browser
2. Try watching a video or two on YouTube before exporting cookies
3. Clear your browser cache and cookies, then log in fresh and export again
4. Try using a different browser
