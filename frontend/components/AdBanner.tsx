"use client";

import { useEffect } from 'react';

interface AdBannerProps {
    zoneId: string;
    className?: string;
}

export default function AdBanner({ zoneId, className = "" }: AdBannerProps) {
    useEffect(() => {
        // This is where the ad script would be injected or refreshed
        // For Adsterra, it usually involves appending a script tag
        // For now, we'll just render the placeholder structure
    }, [zoneId]);

    return (
        <div className={`w-full flex justify-center items-center my-4 ${className}`}>
            <div className="bg-gray-100 border border-gray-300 w-full max-w-[728px] h-[90px] flex items-center justify-center text-gray-400 text-sm">
                {/* Placeholder for Adsterra Banner */}
                AD SPACE (Zone: {zoneId})
                {/* 
           Actual implementation would look like:
           <div id={`container-${zoneId}`}></div>
           <script type="text/javascript">
               atOptions = {
                   'key' : zoneId,
                   'format' : 'iframe',
                   'height' : 90,
                   'width' : 728,
                   'params' : {}
               };
           </script>
           <script type="text/javascript" src="//www.highperformanceformat.com/YOUR_SCRIPT_ID/invoke.js"></script>
        */}
            </div>
        </div>
    );
}
