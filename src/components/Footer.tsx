import { Link } from "@tanstack/react-router";
import { ClipboardList, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ClipboardList className="h-4 w-4" />
            <span className="text-sm font-medium">Tasks</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/about" className="transition-colors hover:text-foreground">
              Sobre
            </Link>
            <Link to="/como-usar" className="transition-colors hover:text-foreground">
              Como Usar
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacidade
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Termos
            </Link>
          </nav>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1 text-xs text-muted-foreground/60">
          <span>Feito com</span>
          <Heart className="h-3 w-3 text-rose-400" />
          <span>· {year} Tasks</span>
        </div>
      </div>
    </footer>
  );
}
