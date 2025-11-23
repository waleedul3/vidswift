import type { Metadata } from "next";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
    title: "TikTok Video Downloader - No Watermark | VidSwift",
    description: "Download TikTok videos without watermark. Fast, free, and unlimited TikTok downloader.",
};

export default function TikTokDownloader() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl w-full">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    Free <span className="text-black">TikTok</span> Video Downloader
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Save TikTok videos without watermark in HD quality.
                </p>

                <AdBanner zoneId="YOUR_ADSTERRA_ZONE_ID_TIKTOK_TOP" className="mb-8" />

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
                    <p className="text-gray-500 mb-4">Paste your TikTok link below:</p>
                    <div className="pointer-events-none opacity-50">
                        <div className="flex shadow-lg rounded-lg overflow-hidden">
                            <input type="text" className="flex-1 px-6 py-4" placeholder="https://www.tiktok.com/@user/video/..." disabled />
                            <button className="bg-blue-600 text-white px-8 py-4 font-bold">Download</button>
                        </div>
                        <p className="mt-2 text-sm text-blue-600">Go to Homepage to use the tool</p>
                    </div>
                </div>

                <article className="prose lg:prose-xl mx-auto text-left">
                    <h2>How to Download TikTok Videos?</h2>
                    <ol>
                        <li>Open the TikTok app and find the video.</li>
                        <li>Tap "Share" and then "Copy Link".</li>
                        <li>Paste the link into VidSwift and click Download.</li>
                    </ol>
                </article>
            </div>
        </div>
    );
}
