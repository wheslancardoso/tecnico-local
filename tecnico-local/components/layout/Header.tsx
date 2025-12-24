import Link from "next/link";
import { siteContent } from "@/content/site";

export default function Header() {
    const { siteName } = siteContent;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/90 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl">
                        terminal
                    </span>
                    <span className="font-bold text-lg tracking-tight">{siteName}</span>
                </div>
                <Link
                    className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                    href="https://wa.me/"
                >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Falar no WhatsApp
                </Link>
            </div>
        </header>
    );
}
