import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Tasks" },
      { name: "description", content: "Política de privacidade do Tasks. Seus dados são seus." },
      { property: "og:title", content: "Política de Privacidade — Tasks" },
      { property: "og:description", content: "Política de privacidade do Tasks. Seus dados são seus." },
      { property: "og:url", content: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/privacy" },
    ],
    links: [
      { rel: "canonical", href: "https://id-preview--de9b5150-3d0a-4a19-a587-337fa698f4fe.lovable.app/privacy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Política de Privacidade</h1>
        <p className="mt-3 text-muted-foreground">
          Sua privacidade é nossa prioridade. Leia como tratamos seus dados.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Dados que coletamos</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            O Tasks <strong>não coleta nenhum dado pessoal</strong>. As tarefas que você cria são 
            armazenadas localmente no seu navegador, usando o <code className="rounded bg-muted px-1 py-0.5 text-xs">localStorage</code>. 
            Não enviamos suas informações para nenhum servidor.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Como seus dados são armazenados</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tudo fica no seu dispositivo. Isso significa que:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Suas tarefas não são acessíveis por ninguém além de você</li>
            <li>Não precisa criar conta ou fazer login</li>
            <li>Se você limpar os dados do navegador, as tarefas serão apagadas</li>
            <li>As tarefas não são sincronizadas entre dispositivos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Cookies e rastreamento</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Não usamos cookies de rastreamento, não exibimos anúncios e não 
            compartilhamos dados com terceiros. Nenhuma ferramenta de analytics 
            está instalada no app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Segurança</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Como os dados ficam apenas no seu navegador, a segurança depende das 
            configurações do seu dispositivo. Recomendamos manter seu navegador 
            atualizado e não compartilhar seu dispositivo sem proteção.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Alterações nesta política</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Podemos atualizar esta política ocasionalmente. Qualquer mudança será 
            refletida nesta página com a data de atualização.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Contato</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Se tiver dúvidas sobre privacidade, entre em contato pelo suporte do projeto.
          </p>
        </section>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground/60">
        Última atualização: Junho de 2026
      </p>
    </div>
  );
}
