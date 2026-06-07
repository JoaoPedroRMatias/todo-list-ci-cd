import { createFileRoute } from "@tanstack/react-router";
import { Plus, CheckSquare, Trash2, Sparkles, ListChecks } from "lucide-react";

export const Route = createFileRoute("/como-usar")({
  head: () => ({
    meta: [
      { title: "Como Usar — Tasks" },
      { name: "description", content: "Aprenda a usar o Tasks em poucos passos. Guia rápido e prático." },
      { property: "og:title", content: "Como Usar — Tasks" },
      { property: "og:description", content: "Aprenda a usar o Tasks em poucos passos. Guia rápido e prático." },
      { property: "og:url", content: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/como-usar" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/como-usar" },
    ],
  }),
  component: ComoUsarPage,
});

const steps = [
  {
    icon: Plus,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Adicione uma tarefa",
    description: "Digite o que precisa fazer no campo de texto e pressione Enter ou clique no botão +. Sua tarefa aparece instantaneamente na lista.",
  },
  {
    icon: CheckSquare,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "Marque como concluída",
    description: "Clique no quadrado ao lado de uma tarefa para marcá-la como feita. Ela fica riscada e o contador de tarefas pendentes é atualizado automaticamente.",
  },
  {
    icon: Trash2,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    title: "Remova tarefas",
    description: "Passe o mouse sobre uma tarefa e clique no ícone de lixeira para removê-la. Para limpar todas as concluídas de uma vez, use o botão ao final da lista.",
  },
  {
    icon: Sparkles,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "Celebre suas conquistas",
    description: "Quando você completa todas as tarefas, uma surpresa animada aparece para celebrar! É nossa forma de te parabenizar por um bom trabalho.",
  },
  {
    icon: ListChecks,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    title: "Tudo salvo automaticamente",
    description: "Não precisa se preocupar em salvar. Suas tarefas ficam guardadas no navegador e estarão aqui quando você voltar, mesmo depois de fechar a aba.",
  },
];

function ComoUsarPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <ListChecks className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Como Usar</h1>
        <p className="mt-3 text-muted-foreground">
          O Tasks é super simples. Em 5 passos você já domina tudo.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex shrink-0 flex-col items-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.iconBg}`}>
                <step.icon className={`h-5 w-5 ${step.iconColor}`} />
              </div>
              {index < steps.length - 1 && (
                <div className="mt-2 h-full w-px bg-border" />
              )}
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-foreground">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-emerald-50 via-background to-amber-50 p-6 text-center">
        <p className="text-sm font-medium text-foreground">
          Pronto para começar?
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Volte para a página inicial e adicione sua primeira tarefa!
        </p>
      </div>
    </div>
  );
}
