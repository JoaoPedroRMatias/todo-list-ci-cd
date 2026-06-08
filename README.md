# Tasks — To-Do List

**Lista de tarefas simples, limpa e rápida — com pipeline CI/CD completo.**

Aplicação frontend sem backend. Dados persistidos no `localStorage`. Deploy automatizado via Harbor + Watchtower.

## Funcionalidades

- Adicionar tarefas (Enter ou botão)
- Marcar tarefas como concluídas
- Deletar tarefas individualmente
- Limpar todas as concluídas de uma vez
- Contador de pendentes e concluídas
- Persistência automática no navegador

## Quick Start

```bash
bun install
bun run dev
```

Acesse `http://localhost:3000`.

## Requisitos

- [Bun](https://bun.sh) >= 1.0
- Node.js >= 20 (opcional, para compatibilidade)
- Docker + Docker Compose (para produção)

## Stack

| Camada     | Tecnologia                          |
|------------|-------------------------------------|
| Framework  | React 19 + TanStack Start           |
| Roteamento | TanStack Router                     |
| Estilo     | Tailwind CSS v4 + Radix UI          |
| Build      | Vite 7                              |
| Linguagem  | TypeScript                          |
| Runtime    | Bun                                 |

## Scripts

| Comando           | Ação                        |
|-------------------|-----------------------------|
| `bun run dev`     | Servidor de desenvolvimento |
| `bun run build`   | Build de produção           |
| `bun run preview` | Preview do build            |
| `bun run lint`    | Lint com ESLint             |
| `bun run format`  | Formatar com Prettier       |

## CI/CD Pipeline

```
push → develop        →  CI (lint + install)
PR   → main           →  CI → Build Docker → Push Harbor
prod                  →  Watchtower detecta :latest → deploy automático
```

### Workflows

| Workflow     | Trigger              | Ações                              |
|--------------|----------------------|------------------------------------|
| `ci.yml`     | push/PR em `develop` | Install deps, lint                 |
| `main.yml`   | PR em `main`         | CI + build + push Harbor           |

### Secrets necessários

| Secret             | Descrição                        |
|--------------------|----------------------------------|
| `HARBOR_HOST`      | Host do registry Harbor          |
| `HARBOR_USERNAME`  | Usuário Harbor                   |
| `HARBOR_PASSWORD`  | Senha Harbor                     |

### Tags publicadas

```
<HARBOR_HOST>/to-do-list/todo-list:latest
<HARBOR_HOST>/to-do-list/todo-list:<git-sha>
```

## Produção (Docker)

O `docker-compose.yml` sobe a aplicação e o Watchtower juntos.

```bash
# copiar e preencher variáveis de ambiente
cp .env.example .env

# subir
docker compose up -d
```

### Variáveis de ambiente (`.env`)

```env
HARBOR_HOST=seu-harbor.dominio.com
HARBOR_USERNAME=seu-usuario
HARBOR_PASSWORD=sua-senha
```

O Watchtower verifica novas imagens a cada **30 segundos** e reinicia automaticamente o container `todo-list-app` quando uma nova versão for publicada no Harbor.

## Estrutura

```
src/
├── components/
│   ├── TodoApp.tsx     # Componente principal
│   └── ui/             # Componentes base (shadcn/ui)
├── hooks/
│   └── useTodos.ts     # Lógica de state + localStorage
└── routes/
    └── index.tsx       # Página principal
```

## License

MIT