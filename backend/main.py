import os
import uuid
import asyncio
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import yt_dlp

app = FastAPI(title="VidSwift API")

origins = [
    "https://vidswift-seven.vercel.app",
    "https://vidswift.tk",
    "https://vidswift.ml",
    "https://vidswift.ga",
    "https://vidswift.cf",
    "https://www.vidswift.tk",
    "http://localhost:3000",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex='https://.*\.vercel\.app',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "VidSwift API is running"}

@app.get("/extract")
async def extract_info(url: str):
    if not url:
        raise HTTPException(status_code=400, detail="URL is required")
    
    try:
        # Check if it's an Instagram URL
        is_instagram = 'instagram.com' in url.lower()
        
        ydl_opts = {
            "quiet": True,
            "nocheckcertificate": True,
            'no_warnings': True,
        }
        
        # Add Instagram-specific options
        if is_instagram:
            ydl_opts.update({
                'http_headers': {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                },
                'extractor_args': {
                    'instagram': {
                        'api_version': 'v1'
                    }
                }
            })
        else:
            # Use cookies for other platforms
            ydl_opts["cookiefile"] = "/app/cookies.txt"
            
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            
            # Basic info
            return {
                "status": "ok",
                "title": info.get('title'),
                "thumbnail": info.get('thumbnail'),
                "duration": info.get('duration'),
                "uploader": info.get('uploader'),
                "formats": _process_formats(info)
            }
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"Error extracting info: {str(e)}")
        
        # Provide more specific error messages for Instagram
        if 'instagram.com' in url.lower():
            if 'login' in str(e).lower() or 'private' in str(e).lower():
                raise HTTPException(status_code=403, detail="This Instagram content requires login or is private. Try with a public post.")
            elif 'not available' in str(e).lower():
                raise HTTPException(status_code=404, detail="Instagram content not found or has been removed.")
        
        raise HTTPException(status_code=500, detail=f"Extraction failed: {str(e)}")

def _process_formats(info):
    # This is a simplified format processor. 
    # In a real app, we'd filter and sort better.
    formats = []
    if 'formats' in info:
        for f in info['formats']:
            # Filter for video/audio
            if f.get('vcodec') != 'none' or f.get('acodec') != 'none':
                formats.append({
                    'format_id': f.get('format_id'),
                    'ext': f.get('ext'),
                    'resolution': f.get('resolution'),
                    'filesize': f.get('filesize'),
                    'note': f.get('format_note'),
                    'vcodec': f.get('vcodec'),
                    'acodec': f.get('acodec'),
                })
    return formats

@app.get("/download")
async def download_video(url: str, format_id: str = None, background_tasks: BackgroundTasks = None):
    if not url:
        raise HTTPException(status_code=400, detail="URL is required")

    file_id = str(uuid.uuid4())
    filename_template = f"temp_{file_id}.%(ext)s"
    
    # Check if it's an Instagram URL
    is_instagram = 'instagram.com' in url.lower()
    
    ydl_opts = {
        'format': format_id if format_id else 'best',
        'outtmpl': filename_template,
        'quiet': True,
    }
    
    # Add Instagram-specific options
    if is_instagram:
        ydl_opts.update({
            'http_headers': {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            'extractor_args': {
                'instagram': {
                    'api_version': 'v1'
                }
            }
        })
    else:
        ydl_opts['cookiefile'] = '/app/cookies.txt'

    try:
        # Download in a separate thread to not block event loop
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(None, lambda: _download(ydl_opts, url))
        
        # Find the downloaded file
        downloaded_file = None
        for file in os.listdir('.'):
            if file.startswith(f"temp_{file_id}"):
                downloaded_file = file
                break
        
        if not downloaded_file:
            raise HTTPException(status_code=500, detail="Download failed")

        # Schedule cleanup
        background_tasks.add_task(cleanup_file, downloaded_file)
        
        return FileResponse(
            path=downloaded_file, 
            filename=downloaded_file, 
            media_type='application/octet-stream'
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def _download(opts, url):
    with yt_dlp.YoutubeDL(opts) as ydl:
        ydl.download([url])

def cleanup_file(path: str):
    try:
        os.remove(path)
    except Exception:
        pass
