import type { Metadata } from "next";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
    title: "Instagram Reel Downloader - Save Insta Reels | VidSwift",
    description: "Download Instagram Reels, Videos, and Photos. Fast, free, and anonymous Instagram downloader.",
};

export default function InstagramDownloader() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl w-full">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    Free <span className="text-pink-600">Instagram</span> Reel Downloader
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Save Instagram Reels, Videos, and Photos directly to your device.
                </p>

                <AdBanner zoneId="YOUR_ADSTERRA_ZONE_ID_IG_TOP" className="mb-8" />

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
                    <p className="text-gray-500 mb-4">Paste your Instagram link below:</p>
                    <div className="pointer-events-none opacity-50">
                        <div className="flex shadow-lg rounded-lg overflow-hidden">
                            <input type="text" className="flex-1 px-6 py-4" placeholder="https://www.instagram.com/reel/..." disabled />
                            <button className="bg-blue-600 text-white px-8 py-4 font-bold">Download</button>
                        </div>
                        <p className="mt-2 text-sm text-blue-600">Go to Homepage to use the tool</p>
                    </div>
                </div>

                <article className="prose lg:prose-xl mx-auto text-left">
                    <h2>How to Download Instagram Reels?</h2>
                    <ol>
                        <li>Open the Instagram Reel you want to save.</li>
                        <li>Tap the three dots (...) and select "Copy Link".</li>
                        <li>Paste the link into VidSwift and click Download.</li>
                    </ol>
                </article>
            </div>
        </div>
    );
}
