# Next.js 15 Enterprise SaaS Starter

[![CI](https://github.com/FelipeMadson/nextjs-enterprise-saas-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/nextjs-enterprise-saas-starter/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-green.svg)](https://github.com/FelipeMadson/nextjs-enterprise-saas-starter/releases)

Arquitetura SaaS corporativa de alta performance desenvolvida com **Next.js 15 App Router**, **React 19**, **Server Actions** e validação com **Zod**, suportando isolamento multi-tenant por subdomínio. Desenvolvido por [Felipe Madison](https://github.com/FelipeMadson).

## Topologia Arquitetural

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        RESOLUÇÃO DE BORDA & ROTEAMENTO                 │
│   • Resolução de Subdomínio e Extração de Tenant                       │
│   • Políticas Estritas de Segurança e Headers                          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        SERVER ACTIONS & CONTRATOS                      │
│   • Validação em Tempo de Execução com Zod                             │
│   • Execução Segura no Servidor (Zero Leaks para o Client)             │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        ISOLAMENTO MULTI-TENANT                         │
│   • Contexto Delimitado por Tenant                                     │
│   • Segurança e Imutabilidade de Dados                                 │
└────────────────────────────────────────────────────────────────────────┘
```

## Destaques

- **Next.js 15 & React 19**: Adoção dos padrões mais recentes de Server Components e Server Actions.
- **Multi-Tenancy por Subdomínio**: Validação robusta de contratos e isolamento de tenants.
- **Tipagem Estrita**: Zero dependências instáveis ou não fixadas.

## Compilação e Testes

```bash
npm install
npm run build
npm test
```

## Autor

Desenvolvido por **[Felipe Madison](https://github.com/FelipeMadson)**.
