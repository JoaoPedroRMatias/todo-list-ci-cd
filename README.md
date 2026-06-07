# Tasks — To-Do List

Aplicação de lista de tarefas simples, limpa e rápida. Dados persistidos no `localStorage`, sem backend.

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
