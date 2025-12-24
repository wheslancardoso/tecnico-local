import { services, servicesSection, type Service } from "@/content/services";

interface ServiceCardProps {
    service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="bg-background-alt p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors group flex flex-col h-full shadow-sm">
            <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-text-main group-hover:text-primary transition-colors text-2xl">
                    {service.icon}
                </span>
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-text-secondary text-sm font-body leading-relaxed flex-grow">
                {service.description}
            </p>
        </div>
    );
}

export default function Services() {
    return (
        <section className="py-20 lg:py-28 px-6 bg-background-light" id="servicos">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            {servicesSection.label}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                            {servicesSection.title}
                        </h2>
                    </div>
                    <p className="text-text-secondary max-w-md text-left md:text-right font-body">
                        {servicesSection.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
