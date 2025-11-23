"use client";

import { useState } from "react";
import InputBar from "@/components/InputBar";
import DownloadCard from "@/components/DownloadCard";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [error, setError] = useState("");

  const handleUrlSubmit = async (url: string) => {
    setIsLoading(true);
    setError("");
    setVideoInfo(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/extract?url=${encodeURIComponent(url)}`);

      if (!response.ok) {
        throw new Error("Failed to fetch video info");
      }

      const data = await response.json();
      setVideoInfo(data);
    } catch (err) {
      setError("Failed to process URL. Please check the link and try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (formatId: string) => {
    if (!videoInfo) return;

    // In a real app, this would trigger the download
    // For now, we'll redirect to the API download endpoint
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    // We need the original URL, but we don't have it stored in videoInfo. 
    // Ideally we should store it or pass it back.
    // For this demo, we'll just alert.
    alert(`Starting download for format ${formatId}... (Backend integration required for actual file stream)`);

    // Example: window.location.href = `${apiUrl}/download?url=...&format_id=${formatId}`;
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          <span className="text-blue-600">VidSwift</span> Video Downloader
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Download videos, reels, shorts, and music from YouTube, Instagram, TikTok, and more. Fast, free, and secure.
        </p>

        <AdBanner zoneId="YOUR_ADSTERRA_ZONE_ID_TOP" className="mb-8" />

        <InputBar onUrlSubmit={handleUrlSubmit} isLoading={isLoading} />

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {videoInfo && (
          <>
            <DownloadCard videoInfo={videoInfo} onDownload={handleDownload} />
            <AdBanner zoneId="YOUR_ADSTERRA_ZONE_ID_MIDDLE" className="mt-8" />
          </>
        )}

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Platform Icons Placeholder */}
          {['YouTube', 'Instagram', 'TikTok', 'Facebook', 'Twitter', 'Reddit'].map((platform) => (
            <div key={platform} className="flex flex-col items-center justify-center">
              <div className="h-12 w-12 bg-gray-300 rounded-full mb-2"></div>
              <span className="text-sm font-medium text-gray-500">{platform}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full max-w-4xl">
        <AdBanner zoneId="YOUR_ADSTERRA_ZONE_ID_BOTTOM" />
      </div>
    </div>
  );
}
