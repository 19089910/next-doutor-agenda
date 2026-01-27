## Roteiro Aula 01: Setup do Projeto

- [x] Inicialização do projeto Next.js
- [x] Configuração de ferramentas (ESlint, Prettier, Tailwind)
- [x] Configuração do Drizzle e banco de dados
  - npm i drizzle-orm@0.43.1 pg@8.15.6
  - node = v22.13.0
  - npm i -D drizzle-kit@0.31.1
  - /src/db/schema.ts
  - npx drizzle-kit push
  - npx drizzle-kit studio (ver o banco)
- [x] Configuração do shadcn/ui
  - [theming ](https://ui.shadcn.com/docs/theming)

## Roteiro Aula 02: Autenticação e Configurações do Estabelecimento

- [x] Tela de login e criação de conta
- [x] Login com e-mail e senha
      [better-auth](https://www.better-auth.com/docs/installation)

  - npm install better-auth@1.2.7
  - npx @better-auth/cli@1.2.7 generate (parecisa install dot.env)
  - /auth-shema.ts/user -> /src/db/schema.ts/usersTable
  - /auth-shema.ts/sessions -> /src/db/schema.ts/sessionsTable
  - /auth-shema.ts/accounts -> /src/db/schema.ts/accountsTable
  - /src/lib/auth.ts/auth/database/usePlural: true
  - /src/lib/auth.ts/auth/user/modelName: usersTable
  - /src/lib/auth.ts/auth/sessions/modelName: sessionsTable
  - /src/lib/auth.ts/auth/account/modelName: accountsTable
  - /src/lib/auth.ts/auth/verification/modelName: verificationsTable
  - npx drizzle-kit push (delete server db usersTable, sessionsTable, accountsTable)

- [x] Login com o Google
      [better-auth basic-usage](https://www.better-auth.com/docs/basic-usage)
  - /src/lib/auth.ts/auth/verification/emailAndPassword/enabled: true
  - /src/lib/auth-client.ts/authClient
- [x] Fundamentos do Next.js (Rotas, Páginas, Layouts)
- [x] Criação de clínica

## Roteiro Aula 03: Gerenciamento de Profissionais e Disponibilidade

- [x] Sidebar e Route Groups
- [x] Página de médicos
- [x] Criação de médicos & NextSafeAction
- [x] Listagem de médicos
- [x] Atualização de médicos
- [x] Deleção de médicos

## Roteiro Aula 04: Gerenciamento de Pacientes e Agendamentos

- [] Criação de pacientes
- [] Edição de pacientes
- [] Listagem de pacientes
- [] Deleção de pacientes
- [] Criação de agendamentos
- [] Listagem de agendamentos
- [] Deleção de agendamentos

---
