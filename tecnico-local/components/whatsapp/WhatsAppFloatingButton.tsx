import Link from "next/link";
import { siteContent } from "@/content/site";

export default function WhatsAppFloatingButton() {
    const { whatsappLink, floatingButton } = siteContent;

    return (
        <Link
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-full shadow-lg transition-all duration-200 sm:hidden"
            href={whatsappLink}
            aria-label="Entrar em contato via WhatsApp"
        >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span className="text-sm">{floatingButton.text}</span>
        </Link>
    );
}
