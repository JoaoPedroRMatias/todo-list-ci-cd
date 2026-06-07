import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Tasks" },
      { name: "description", content: "Termos de uso do Tasks. Regras simples para um uso tranquilo." },
      { property: "og:title", content: "Termos de Uso — Tasks" },
      { property: "og:description", content: "Termos de uso do Tasks. Regras simples para um uso tranquilo." },
      { property: "og:url", content: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/terms" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/terms" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Termos de Uso</h1>
        <p className="mt-3 text-muted-foreground">
          Regras simples para usar o Tasks de forma tranquila e responsável.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Aceitação dos termos</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Ao usar o Tasks, você concorda com estes termos. Se não concordar, 
            por favor, não utilize o serviço.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Uso permitido</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            O Tasks foi criado para uso pessoal e organização de tarefas do dia a dia. 
            É permitido:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Criar e gerenciar listas de tarefas pessoais</li>
            <li>Usar o app em qualquer dispositivo com navegador</li>
            <li>Compartilhar o link do app com outras pessoas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Uso proibido</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Não é permitido:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Tentar acessar ou modificar o código-fonte do app de forma não autorizada</li>
            <li>Usar o app para atividades ilegais ou maliciosas</li>
            <li>Sobrecarregar intencionalmente os servidores</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Responsabilidade pelos dados</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Como as tarefas são armazenadas localmente no seu navegador, você é 
            responsável por seus próprios dados. Recomendamos não armazenar 
            informações sensíveis ou confidenciais nas tarefas.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Disponibilidade</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Fazemos o possível para manter o app sempre disponível, mas não 
            garantimos funcionamento ininterrupto. Manutenções, atualizações 
            ou problemas técnicos podem causar indisponibilidade temporária.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Mudanças nos termos</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Podemos atualizar estes termos periodicamente. O uso continuado do 
            app após alterações constitui aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Lei aplicável</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Estes termos são regidos pelas leis do Brasil. Qualquer disputa 
            será resolvida nos tribunais competentes.
          </p>
        </section>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground/60">
        Última atualização: Junho de 2026
      </p>
    </div>
  );
}
