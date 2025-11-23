# VidSwift Deployment Guide

## A) Backend Hosting on Render (FREE)

1.  **Sign Up**:
    - Go to [Render.com](https://render.com/) and sign up with GitHub.

2.  **Create Web Service**:
    - Click "New" -> "Web Service".
    - Connect your `vidswift` repository.

3.  **Configure Service**:
    - **Name**: `vidswift-api`
    - **Region**: Choose nearest.
    - **Branch**: `main`
    - **Root Directory**: `backend` (IMPORTANT)
    - **Runtime**: `Docker`
    - **Instance Type**: Free

4.  **Environment Variables**:
    - Render automatically sets `PORT`.
    - Our Dockerfile is already configured to use it (`CMD uvicorn ... --port ${PORT:-8000}`).

5.  **Deploy**:
    - Click "Create Web Service".
    - Wait for the build to finish.
    - Copy the service URL (e.g., `https://vidswift-api.onrender.com`).

6.  **Update Frontend**:
    - Use this URL for the Vercel `NEXT_PUBLIC_API_URL` environment variable.

## B) Frontend Hosting on Vercel (FREE)

1.  **Push to GitHub**:
    - Initialize git in project root.
    - Commit all files.
    - Push to a new GitHub repository.

2.  **Import to Vercel**:
    - Go to [Vercel Dashboard](https://vercel.com/dashboard).
    - Click "Add New..." -> "Project".
    - Import your GitHub repo.

3.  **Configure Build**:
    - Framework Preset: Next.js
    - Root Directory: `frontend` (IMPORTANT)

4.  **Environment Variables**:
    - Add `NEXT_PUBLIC_API_URL` = `https://vidswift-api.onrender.com` (or your custom domain)

5.  **Deploy**:
    - Click "Deploy".

## C) Free Domain Setup (Freenom)

> [!WARNING]
> Freenom (.tk, .ml, .ga) availability is currently unstable. Consider buying a cheap domain (Namecheap) if Freenom fails.

1.  **Register**:
    - Visit [Freenom](https://freenom.com).
    - Search `vidswift.tk`.
    - Checkout (Free).

2.  **DNS Setup**:
    - Go to "Manage Domain" -> "Management Tools" -> "Nameservers".
    - Select "Use custom nameservers".
    - Enter Vercel Nameservers:
        - `ns1.vercel-dns.com`
        - `ns2.vercel-dns.com`

3.  **Subdomain for Backend**:
    - In Vercel Dashboard -> Domains.
    - Add `api.vidswift.tk`.
    - Configure it to point to Render's IP or CNAME if managing DNS via Vercel, OR set it up in Render if managing DNS elsewhere.
    - *Simpler approach*: Keep backend on `onrender.com` subdomain if strictly free.

## D) Ad Network Integration

### 1. Adsterra
- Sign up at Adsterra.
- Create "Banner 728x90" and "Native Banner".
- Get `zone_id`.
- Replace `YOUR_ADSTERRA_ZONE_ID` in `frontend/components/AdBanner.tsx`.

### 2. PropellerAds
- Sign up.
- Create "OnClick (Popunder)" zone.
- Get script URL.
- Replace URL in `frontend/components/PopunderLoader.tsx`.

### 3. VPN Affiliate
- Sign up for NordVPN/ExpressVPN affiliate program.
- Get affiliate link.
- Replace `YOUR_VPN_AFFILIATE_LINK` in `frontend/components/AffiliateVPNBlock.tsx`.
