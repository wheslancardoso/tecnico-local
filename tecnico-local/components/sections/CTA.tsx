import { siteContent } from "@/content/site";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

export default function CTA() {
    const { cta } = siteContent;

    return (
        <section className="py-24 px-6 bg-background-alt text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                    {cta.title}
                </h2>
                <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
                    {cta.description}
                </p>
                <WhatsAppButton text={cta.buttonText} size="large" />
                <div className="mt-8 flex items-center justify-center gap-2 text-text-secondary text-sm font-medium bg-gray-50 py-2 px-4 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {cta.availability}
                </div>
            </div>
        </section>
    );
}
