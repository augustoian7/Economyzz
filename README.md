# Economyzz - Personal Finance Management

Uma aplicação simples e funcional para gerenciamento de finanças pessoais.

## Stack

- **Frontend:** Next.js 14 (App Router)
- **Backend:** API Routes do Next.js
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** NextAuth.js
- **Styling:** CSS Inline

## Features

- ✅ Autenticação com email/senha
- ✅ Criação de conta com trial de 7 dias
- ✅ Dashboard protegido
- ✅ Integração com Supabase

## Variáveis de Ambiente

Crie um arquivo `.env.local`:

```
DATABASE_URL=postgresql://postgres:SENHA@db.XXXXX.supabase.co:5432/postgres
DIRECT_URL=postgresql://postgres.XXXXX:SENHA@aws-1-sa-east-1.pooler.supabase.com:6543/postgres
NEXTAUTH_URL=https://economyzz-deploy.vercel.app
NEXTAUTH_SECRET=seu-secret-aqui
NEXT_PUBLIC_APP_URL=https://economyzz-deploy.vercel.app
NEXT_PUBLIC_APP_NAME=Economyzz
```

## Deploy

1. Push para GitHub
2. Conectar na Vercel
3. Adicionar Environment Variables
4. Deploy!

## Estrutura

```
economyzz/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── login/
│   ├── signup/
│   ├── dashboard/
│   └── layout.tsx
├── lib/
│   └── prisma.ts
├── prisma/
│   └── schema.prisma
└── package.json
```
