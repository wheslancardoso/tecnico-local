export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-main">
                        terminal
                    </span>
                    <span className="font-bold text-text-main">Técnico.Local</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                            location_on
                        </span>
                        São Paulo / SP - Zona Sul
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">call</span>
                        (11) 99999-9999
                    </span>
                </div>
                <div className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Técnico Autônomo. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
