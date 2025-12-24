import Link from "next/link";
import { siteContent } from "@/content/site";

export default function Hero() {
    const { hero } = siteContent;

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 border-b border-gray-200 overflow-hidden bg-background-alt">
            <div className="absolute right-0 top-0 h-full w-1/3 technical-grid opacity-30 pointer-events-none hidden lg:block"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full w-fit border border-gray-200">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                                {hero.badge}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-text-main">
                            {hero.titlePrimary} <br />
                            <span className="text-text-main">{hero.titleSecondary}</span> e{" "}
                            <span className="relative inline-block">
                                {hero.titleTertiary}
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary max-w-xl font-body leading-relaxed mt-2">
                            {hero.description}
                        </p>
                        <p className="text-sm text-text-secondary font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-base">
                                location_on
                            </span>
                            {hero.locationInfo}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                className="inline-flex items-center justify-center h-12 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors duration-200 gap-2 group"
                                href="#"
                            >
                                <span>{hero.ctaWhatsApp}</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
                                    arrow_forward
                                </span>
                            </Link>
                            <Link
                                className="inline-flex items-center justify-center h-12 px-8 bg-white border border-gray-300 hover:border-text-main text-text-main font-semibold rounded-lg transition-colors duration-200"
                                href="#servicos"
                            >
                                {hero.ctaServices}
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative h-full min-h-[300px] flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-square bg-gray-50 rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <span className="text-xs font-mono text-gray-400">
                                    {hero.terminal.version}
                                </span>
                            </div>
                            <div className="space-y-3 font-mono text-sm text-gray-500">
                                {hero.terminal.items.map((item, index) => (
                                    <div key={index}>
                                        {item.label === "---" ? (
                                            <div className="h-px bg-gray-200 my-2"></div>
                                        ) : (
                                            <div className="flex justify-between">
                                                <span>{item.label}</span>
                                                <span
                                                    className={
                                                        item.status === "success"
                                                            ? "text-primary"
                                                            : "text-yellow-600"
                                                    }
                                                >
                                                    {item.value}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-4 border-t border-gray-200">
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary"
                                        style={{ width: `${hero.terminal.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
