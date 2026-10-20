# Next.js 15 Enterprise SaaS Starter

[![CI](https://github.com/FelipeMadson/nextjs-enterprise-saas-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/FelipeMadson/nextjs-enterprise-saas-starter/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Release](https://img.shields.io/badge/release-v1.0.0-green.svg)](https://github.com/FelipeMadson/nextjs-enterprise-saas-starter/releases)

Full-stack enterprise SaaS architecture built on **Next.js 15 App Router**, **React 19**, **Server Actions**, and **Zod** schema contracts with strict sub-domain multi-tenancy. Developed by [Felipe Madison](https://github.com/FelipeMadson).

## Architecture Overview

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        EDGE ROUTING & RESOLUTION                       │
│   • Subdomain Hostname Resolver (Tenant Context Extraction)            │
│   • Security Headers & Strict CSP Policy                               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        SERVER ACTIONS & API                            │
│   • Zod Schema Validation (Compile & Runtime Contract Guarantee)       │
│   • Mutex & Idempotency Key Tracking                                   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        DATA ISOLATION LAYER                            │
│   • Tenant-Scoped Context Execution                                    │
│   • Zero Shared Mutable State                                          │
└────────────────────────────────────────────────────────────────────────┘
```

## Features

- **Next.js 15 App Router**: Server Components and Server Actions by default.
- **Subdomain Multi-Tenancy**: Isolated tenant boundaries verified by automated test suites.
- **Contract Integrity**: Zod-enforced domain schema validation.

## Building and Verification

```bash
npm install
npm run build
npm test
```

## Author

Authored by **[Felipe Madison](https://github.com/FelipeMadson)**.
