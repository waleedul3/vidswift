import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Tools</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/youtube-video-downloader" className="text-base text-gray-500 hover:text-gray-900">YouTube Downloader</Link></li>
                            <li><Link href="/instagram-reel-downloader" className="text-base text-gray-500 hover:text-gray-900">Instagram Downloader</Link></li>
                            <li><Link href="/tiktok-video-downloader" className="text-base text-gray-500 hover:text-gray-900">TikTok Downloader</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
                            <li><Link href="/dmca" className="text-base text-gray-500 hover:text-gray-900">DMCA</Link></li>
                            <li><Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} VidSwift. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
