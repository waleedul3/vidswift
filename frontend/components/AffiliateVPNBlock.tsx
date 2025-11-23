import Link from 'next/link';

export default function AffiliateVPNBlock() {
    return (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
                Download Safely with VPN — Get 83% OFF
            </h3>
            <p className="text-blue-700 mb-4">
                Protect your privacy and bypass restrictions while downloading.
            </p>
            <Link
                href="YOUR_VPN_AFFILIATE_LINK"
                target="_blank"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-md"
            >
                Get VPN Deal
            </Link>
        </div>
    );
}
