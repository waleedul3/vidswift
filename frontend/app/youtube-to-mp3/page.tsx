import type { Metadata } from "next";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
    title: "YouTube to MP3 Converter - High Quality | VidSwift",
    description: "Convert YouTube videos to MP3. Download YouTube audio in 320kbps. Fast, free, and secure YouTube to MP3 converter.",
};

export default function YouTubeToMp3() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl w-full">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    <span className="text-red-600">YouTube</span> to MP3 Converter
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Convert and download YouTube videos as MP3 audio files.
                </p>

                <AdBanner zoneId="YOUR_ADSTERRA_ZONE_ID_MP3_TOP" className="mb-8" />

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
                    <p className="text-gray-500 mb-4">Paste your YouTube link below:</p>
                    <div className="pointer-events-none opacity-50">
                        <div className="flex shadow-lg rounded-lg overflow-hidden">
                            <input type="text" className="flex-1 px-6 py-4" placeholder="https://www.youtube.com/watch?v=..." disabled />
                            <button className="bg-blue-600 text-white px-8 py-4 font-bold">Convert</button>
                        </div>
                        <p className="mt-2 text-sm text-blue-600">Go to Homepage to use the tool</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
