export interface Service {
    title: string;
    description: string;
    icon: string;
}

export const services: Service[] = [
    {
        title: "Manutenção de Impressoras",
        description:
            "Especialista em impressoras Epson, HP e Canon. Correção de falhas mecânicas, sensores, tração de papel e problemas de impressão.",
        icon: "print",
    },
    {
        title: "Formatação e Windows",
        description:
            "Instalação limpa do Windows, correção de erros, remoção de falhas críticas e otimização do sistema.",
        icon: "settings_system_daydream",
    },
    {
        title: "Backup de Dados",
        description:
            "Backup seguro de arquivos e e-mails, incluindo Outlook, com recuperação assistida em caso de falhas.",
        icon: "cloud_sync",
    },
    {
        title: "Diagnóstico de Hardware",
        description:
            "Análise detalhada de componentes físicos como placa-mãe, memória, fonte e armazenamento.",
        icon: "memory",
    },
];

export const servicesSection = {
    label: "O que fazemos",
    title: "Áreas de Atuação",
    description:
        "Serviços especializados para manter seu equipamento pessoal ou corporativo funcionando com performance máxima.",
};
