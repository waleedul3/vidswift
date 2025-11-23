import type { Metadata } from "next";
import InputBar from "@/components/InputBar";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
    title: "YouTube Video Downloader - Free & Fast | VidSwift",
    description: "Download YouTube videos in 1080p, 4K, MP3. Fast, free, and secure YouTube downloader. No software required.",
};

export default function YouTubeDownloader() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl w-full">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    Free <span className="text-red-600">YouTube</span> Video Downloader
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Convert and download YouTube videos to MP4, MP3, WebM. Best online YouTube downloader.
                </p>

                <AdBanner zoneId="YOUR_ADSTERRA_ZONE_ID_YT_TOP" className="mb-8" />

                {/* We can reuse the same input bar logic here or wrap it in a client component */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
                    <p className="text-gray-500 mb-4">Paste your YouTube link below:</p>
                    {/* For simplicity in this demo, we are just showing the UI. 
               In a real app, we'd import the client-side logic or reuse the Home component with a prop. */}
                    <div className="pointer-events-none opacity-50">
                        <div className="flex shadow-lg rounded-lg overflow-hidden">
                            <input type="text" className="flex-1 px-6 py-4" placeholder="https://www.youtube.com/watch?v=..." disabled />
                            <button className="bg-blue-600 text-white px-8 py-4 font-bold">Download</button>
                        </div>
                        <p className="mt-2 text-sm text-blue-600">Go to Homepage to use the tool</p>
                    </div>
                </div>

                <article className="prose lg:prose-xl mx-auto text-left">
                    <h2>How to Download YouTube Videos?</h2>
                    <ol>
                        <li>Copy the URL of the YouTube video you want to download.</li>
                        <li>Paste the URL into the input box above.</li>
                        <li>Click the "Download" button.</li>
                        <li>Select your desired format (MP4, MP3) and quality.</li>
                    </ol>

                    <h3>Features of VidSwift YouTube Downloader</h3>
                    <ul>
                        <li><strong>High Quality:</strong> Download in 1080p, 2K, 4K.</li>
                        <li><strong>Fast Speed:</strong> No speed limits.</li>
                        <li><strong>Free:</strong> No registration required.</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
