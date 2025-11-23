import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - VidSwift",
    description: "Privacy Policy for VidSwift Video Downloader.",
};

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-blue max-w-none">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>Welcome to VidSwift. We respect your privacy and are committed to protecting your personal data.</p>

                <h2>2. Data We Collect</h2>
                <p>We do not collect any personal information from users. We do not require registration. We may collect anonymous usage data (e.g., pages visited) to improve our service.</p>

                <h2>3. Cookies</h2>
                <p>We use cookies to enhance your experience and for advertising purposes (e.g., Google AdSense, Adsterra).</p>

                <h2>4. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites.</p>

                <h2>5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </div>
        </div>
    );
}
