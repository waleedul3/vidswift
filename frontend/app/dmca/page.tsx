import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DMCA - VidSwift",
    description: "DMCA Copyright Policy for VidSwift.",
};

export default function DMCA() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">DMCA Policy</h1>
            <div className="prose prose-blue max-w-none">
                <p>VidSwift respects the intellectual property rights of others and expects its users to do the same.</p>

                <h2>Copyright Infringement Notification</h2>
                <p>If you believe that your content has been copied in a way that constitutes copyright infringement, please provide us with the following information:</p>
                <ul>
                    <li>A physical or electronic signature of the copyright owner.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed.</li>
                    <li>Identification of the material that is claimed to be infringing.</li>
                    <li>Your contact information (address, telephone number, email).</li>
                </ul>

                <p>Send your DMCA notices to: dmca@vidswift.tk</p>

                <h2>Disclaimer</h2>
                <p>VidSwift is a tool for downloading personal copies of media. We do not host any copyrighted content on our servers.</p>
            </div>
        </div>
    );
}
