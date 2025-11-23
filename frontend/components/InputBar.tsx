"use client";

import { useState } from 'react';

interface InputBarProps {
    onUrlSubmit: (url: string) => void;
    isLoading: boolean;
}

export default function InputBar({ onUrlSubmit, isLoading }: InputBarProps) {
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url.trim()) {
            onUrlSubmit(url.trim());
        }
    };

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setUrl(text);
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
                <div className="flex shadow-lg rounded-lg overflow-hidden">
                    <input
                        type="text"
                        className="flex-1 px-6 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Paste video URL here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        disabled={isLoading}
                    />
                    <button
                        type="button"
                        onClick={handlePaste}
                        className="bg-gray-100 px-4 text-gray-600 hover:bg-gray-200 border-l border-gray-200 font-medium text-sm"
                    >
                        Paste
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                    >
                        {isLoading ? 'Processing...' : 'Download'}
                    </button>
                </div>
            </form>
        </div>
    );
}
