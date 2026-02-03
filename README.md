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
  - 57:00
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

## Roteiro Aula 05: Tela Dashboard e Integração de Pagamentos

- []
- []
- []
- 1:22:00
- [] [Stripe_env]https://dashboard.stripe.com/
  - Chaves de API: STRIPE_SECRET_KEY="" STRIPE_PUBLISHABLE_KEY=""
  - https://dashboard.stripe.com/ catalago-de-produtos/criar/STRIPE_PRODUCT_ID
  - npm i stripe@18.2.0 @strpe/stripe-js@7.3.1 --legacy-peer-deps
- [] Criar Stipe Checkout Session

  - /src/actions/create-stipe-checkout/index.ts
  - NEXT_PUBLIC_APP_URL=http://localhost:3000
  - dashboard.stripe.com/catalago de produtos/produtos/preços/ 59,00/.../copiar id endereço

    - delet STRIPE_PRODUCT_ID
    - Add STRIPE_ESSENTIAL_PLAN_PRICE_ID=price_1... (pode add novos planos STRIPE_PREMIUM...)

  - /src/app/subscription/\_components/subscription-plan.tsx/handleSubscribe
    - se tivesse outros planos:
      - /src/actions/create-stipe-checkout/index.ts/createStripeCHeckout:
        - protectedActionClient.schema(plan: z.enum(["essential" , "premium"]),).action(...)
        - refatoraria a session do subscription-plan.tsx baseado se no plan que recebe do schema cada plano vai ter uma session diferente.

- [] redirecionar a sessao ao checkout(ir ao stripe)

  - /src/app/subscription/\_components/subscription-plan.tsx/import { loadStripe } from "@stripe/stripe-js";
  - NEXT*PUBLIC* no STRIPE_PUBLISHABLE_KEY pois ela nao era acessivel no client \_compomponet saiba que qual quer usuario saber agora, mas nao e sensivel.
  - /src/app/subscription/\_components/subscription-plan.tsx/SubscriptionPlan/createStripCheckoutAtion/onSuccessonSuccess: async ({ data }) => {...}
  - test Mode: card information: 4242 4242 4242 4242 o resto aleatorio.

- [] webhook (local)

  - [cli_stripe]https://docs.stripe.com/stripe-cli/install?install-method=windows
  - stripe login (faça login no stripe)
  - stripe listen --forward-to localhost:3000/api/stripe/webhook (STRIPE_WEBHOOK_SECRET pessoas autorizadas estao chamando o webhook local)
  - tem que deixar rodando o stripe listen
  - /src/app/api/stripe/webhook/route.ts (nao esquecer os break em cada evento) 1:50:00 - 2:12:00

- [] webhook canselar o plano
  - [customer_portal_link]https://dashboard.stripe.com/acct_1SuczfCXzPactw8e/test/settings/billing/portal
- []

---
