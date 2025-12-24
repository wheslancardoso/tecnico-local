import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="py-24 px-6 bg-background-alt text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                    Precisa de suporte técnico?
                </h2>
                <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
                    Evite deixar seu equipamento parado. Fale diretamente com o técnico responsável.
                </p>
                <Link
                    className="inline-flex items-center justify-center h-14 px-10 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-lg shadow-lg shadow-primary/20 transition-all hover:scale-105 duration-200 gap-3"
                    href="https://wa.me/"
                >
                    <span className="material-symbols-outlined">chat</span>
                    Chamar no WhatsApp
                </Link>
                <div className="mt-8 flex items-center justify-center gap-2 text-text-secondary text-sm font-medium bg-gray-50 py-2 px-4 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Atendimento inclusive aos fins de semana
                </div>
            </div>
        </section>
    );
}
