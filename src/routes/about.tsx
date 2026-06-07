import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Zap, Shield, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre — Tasks" },
      { name: "description", content: "Conheça o Tasks, um app de lista de tarefas simples, bonito e gratuito." },
      { property: "og:title", content: "Sobre — Tasks" },
      { property: "og:description", content: "Conheça o Tasks, um app de lista de tarefas simples, bonito e gratuito." },
      { property: "og:url", content: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/about" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sobre o Tasks</h1>
        <p className="mt-3 text-muted-foreground">
          Um app de lista de tarefas criado para ajudar você a organizar seu dia com simplicidade e beleza.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
            <Zap className="h-5 w-5 text-amber-500" />
          </div>
          <h3 className="font-semibold text-foreground">Rápido</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Adicione e gerencie tarefas em segundos, sem complicação.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
            <Shield className="h-5 w-5 text-emerald-500" />
          </div>
          <h3 className="font-semibold text-foreground">Privado</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Seus dados ficam apenas no seu navegador. Nada é enviado para servidores.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50">
            <Heart className="h-5 w-5 text-rose-500" />
          </div>
          <h3 className="font-semibold text-foreground">Gratuito</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            100% gratuito. Sem anúncios, sem assinaturas, sem pegadinhas.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-muted/40 via-background to-accent/30 p-8">
        <h2 className="text-xl font-semibold text-foreground">Nossa Missão</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Acreditamos que organização não precisa ser chata. O Tasks nasceu da vontade de criar uma 
          experiência minimalista e agradável para gerenciar tarefas do dia a dia. Sem funcionalidades 
          desnecessárias, sem telas confusas — apenas você e suas tarefas.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Cada detalhe foi pensado para tornar a experiência leve: desde as animações de celebração 
          quando você completa tudo, até o design limpo que funciona em qualquer dispositivo.
        </p>
      </div>
    </div>
  );
}
