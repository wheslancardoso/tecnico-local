import Link from "next/link";
import { siteContent } from "@/content/site";

interface WhatsAppButtonProps {
    text: string;
    size?: "default" | "large";
}

export default function WhatsAppButton({
    text,
    size = "default",
}: WhatsAppButtonProps) {
    const sizeClasses =
        size === "large"
            ? "h-14 px-10 text-lg shadow-lg shadow-primary/20 hover:scale-105"
            : "h-12 px-8 text-sm";

    return (
        <Link
            className={`inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-200 gap-3 ${sizeClasses}`}
            href={siteContent.whatsappLink}
        >
            <span className="material-symbols-outlined">chat</span>
            {text}
        </Link>
    );
}
