# Técnico.Local

Plataforma web para divulgação e conversão de serviços técnicos locais, com foco inicial em manutenção de computadores e impressoras.

O projeto nasce como uma landing page profissional orientada à conversão via WhatsApp, com arquitetura preparada para crescimento futuro (SEO avançado, páginas por serviço e, eventualmente, funcionalidades de plataforma).

---

## 🎯 Objetivo

- Gerar leads locais qualificados
- Transmitir confiança e autoridade técnica
- Facilitar contato direto entre cliente e técnico
- Servir como base evolutiva para funcionalidades futuras

---

## 🧠 Filosofia do Projeto

- Simples hoje, escalável amanhã
- Arquitetura modular
- Conteúdo desacoplado do layout
- Mobile-first
- Foco em conversão, não em excesso de features

---

## 🚀 Stack Tecnológica

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deploy)

---

## 🧱 Arquitetura de Pastas

tecnico-local/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── globals.css
│
├── components/
│ ├── layout/
│ ├── sections/
│ ├── ui/
│ └── whatsapp/
│
├── content/
│ ├── site.ts
│ ├── services.ts
│ └── seo.ts
│
├── lib/
│ ├── whatsapp.ts
│ └── analytics.ts
│
├── public/
│ └── assets/
│
├── styles/
│ └── theme.ts
│
└── README.md

yaml
Copiar código

---

## 📄 Estrutura da Landing Page (MVP)

- Hero (mensagem principal + CTA)
- Serviços
- Diferenciais
- Chamada final (WhatsApp)
- Rodapé simples

---

## 📲 Conversão

O canal principal de conversão é o **WhatsApp**.

Não são utilizados formulários, login ou sistemas intermediários nesta fase.

---

## 📈 Roadmap (alto nível)

### Fase 0 (atual)
- Landing page
- SEO local básico
- WhatsApp como CTA

### Fase 1
- Páginas individuais por serviço
- SEO avançado

### Fase 2
- Autenticação
- Perfis de usuário

### Fase 3
- Plataforma de intermediação de serviços (marketplace)

---

## ⚠️ Fora do Escopo Atual

- Backend
- Banco de dados
- Login
- CMS
- Marketplace

---

## 🧩 Critério de Qualidade

Uma entrega é considerada concluída apenas se:
- Funcionar corretamente no mobile
- CTA de WhatsApp estiver acessível
- Conteúdo estiver desacoplado
- Código estiver legível e organizado