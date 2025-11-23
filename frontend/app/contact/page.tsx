import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - VidSwift",
    description: "Contact the VidSwift team for support or inquiries.",
};

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
            <div className="prose prose-blue max-w-none">
                <p>Have questions, suggestions, or issues? We'd love to hear from you.</p>

                <h2>Email Support</h2>
                <p>You can reach us at: support@vidswift.tk</p>

                <h2>Business Inquiries</h2>
                <p>For advertising or partnership opportunities, please email: business@vidswift.tk</p>
            </div>
        </div>
    );
}
