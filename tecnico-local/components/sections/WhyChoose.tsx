const differentials = [
    {
        title: "Experiência Real",
        description:
            "Conhecimento prático adquirido em bancada técnica e atendimento em campo, lidando com falhas reais do dia a dia.",
    },
    {
        title: "Múltiplas Marcas",
        description:
            "Atendimento técnico para computadores e impressoras de diversas marcas, sem dependência de fornecedor específico.",
    },
    {
        title: "Transparência no Diagnóstico",
        description:
            "Avaliação técnica honesta, sem troca de peças desnecessárias ou orçamentos inflados.",
    },
    {
        title: "Contato Direto",
        description:
            "Atendimento feito diretamente pelo técnico responsável, sem intermediários ou call centers.",
    },
];

interface DifferentialItemProps {
    title: string;
    description: string;
}

function DifferentialItem({ title, description }: DifferentialItemProps) {
    return (
        <li className="flex items-start gap-4">
            <div className="mt-1 min-w-[24px] text-primary">
                <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
                <h4 className="text-lg font-bold text-text-main">{title}</h4>
                <p className="text-text-secondary text-sm font-body mt-1">
                    {description}
                </p>
            </div>
        </li>
    );
}

export default function WhyChoose() {
    return (
        <section className="py-20 bg-background-alt border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div
                            className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative shadow-inner border border-gray-200"
                            aria-label="Abstract image of a tidy workbench with computer parts"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-300 text-[120px] font-thin">
                                    build
                                </span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-[200px] hidden md:block">
                            <p className="text-4xl font-bold text-primary mb-1">100%</p>
                            <p className="text-sm text-text-secondary font-medium">
                                Comprometimento com a solução
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-text-main mb-8">
                            Por que contratar um suporte técnico especializado?
                        </h2>
                        <ul className="space-y-6">
                            {differentials.map((item, index) => (
                                <DifferentialItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
