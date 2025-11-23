"use client";

import Image from 'next/image';
import { useState } from 'react';

interface Format {
    format_id: string;
    ext: string;
    resolution: string;
    filesize: number;
    note: string;
    vcodec: string;
    acodec: string;
}

interface VideoInfo {
    title: string;
    thumbnail: string;
    duration: number;
    uploader: string;
    formats: Format[];
}

interface DownloadCardProps {
    videoInfo: VideoInfo;
    onDownload: (formatId: string) => void;
}

export default function DownloadCard({ videoInfo, onDownload }: DownloadCardProps) {
    const [selectedFormat, setSelectedFormat] = useState<string>(videoInfo.formats[0]?.format_id || '');

    const formatFileSize = (bytes: number) => {
        if (!bytes) return 'Unknown';
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
        return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-8">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <div className="relative h-48 w-full md:w-80 md:h-full">
                        <Image
                            src={videoInfo.thumbnail}
                            alt={videoInfo.title}
                            fill
                            className="object-cover"
                            unoptimized // Allow external URLs
                        />
                    </div>
                </div>
                <div className="p-8 w-full">
                    <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">{videoInfo.uploader}</div>
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{videoInfo.title}</h2>
                    <p className="mt-2 text-gray-500">Duration: {videoInfo.duration}s</p>

                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Quality</label>
                        <div className="space-y-3">
                            {videoInfo.formats.slice(0, 5).map((format) => (
                                <div
                                    key={format.format_id}
                                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                                    onClick={() => onDownload(format.format_id)}
                                >
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-900">{format.resolution || 'Audio'}</span>
                                        <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            {format.ext}
                                        </span>
                                        {format.note && <span className="ml-2 text-gray-500 text-sm">({format.note})</span>}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-500 mr-4">{formatFileSize(format.filesize)}</span>
                                        <button
                                            className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700"
                                        >
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
