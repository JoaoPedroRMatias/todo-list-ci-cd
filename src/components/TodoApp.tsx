import { useState, useEffect, useRef, type FormEvent, type KeyboardEvent } from "react";
import { Plus, Trash2, X, Sparkles, ClipboardList } from "lucide-react";
import { useTodos } from "@/hooks/useTodos";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import bannerAsset from "@/assets/tasks-banner.jpg.asset.json";

export function TodoApp() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [input, setInput] = useState("");

  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount = todos.length - completedCount;
  const allDone = todos.length > 0 && pendingCount === 0;
  const celebratedRef = useRef(false);

  useEffect(() => {
    if (allDone && !celebratedRef.current) {
      celebratedRef.current = true;
      void import("canvas-confetti").then(({ default: confetti }) => {
        const fire = (origin: { x: number; y: number }) =>
          confetti({
            particleCount: 80,
            spread: 70,
            startVelocity: 45,
            origin,
            colors: ["#a7f3d0", "#fcd34d", "#fda4af", "#a5b4fc", "#fbbf24"],
          });
        fire({ x: 0.2, y: 0.6 });
        fire({ x: 0.8, y: 0.6 });
        setTimeout(() => fire({ x: 0.5, y: 0.5 }), 180);
      });
    }
    if (!allDone) celebratedRef.current = false;
  }, [allDone]);

  function handleSubmit(e?: FormEvent) {
    e?.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="mx-auto w-full max-w-lg px-4 py-12">
      <div
        className="mb-8 overflow-hidden rounded-2xl bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${bannerAsset.url})` }}
      >
        <div className="bg-background/60 px-4 py-10 backdrop-blur-sm">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground drop-shadow-sm">
            Tasks
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {pendingCount} pending · {completedCount} done
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Input
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-11 flex-1 rounded-xl border-border bg-card px-4 text-base shadow-sm focus-visible:ring-1"
        />
        <Button
          onClick={() => handleSubmit()}
          size="icon"
          className="h-11 w-11 shrink-0 rounded-xl"
          aria-label="Add task"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-6 space-y-2">
        {todos.length === 0 && (
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-gradient-to-br from-muted/40 via-background to-accent/30 py-14 text-center animate-fade-in">
            <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-accent/40 blur-3xl" />
            <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-sm ring-1 ring-border">
              <ClipboardList className="h-7 w-7 text-muted-foreground" />
              <Sparkles className="absolute -right-2 -top-2 h-5 w-5 text-amber-400 animate-pulse" />
            </div>
            <p className="relative text-sm font-medium text-foreground">
              Your day is a blank canvas
            </p>
            <p className="relative mt-1 text-xs text-muted-foreground">
              Add your first task and let&apos;s get going.
            </p>
          </div>
        )}

        {allDone && (
          <div className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-100 via-amber-50 to-rose-100 px-4 py-3 text-sm font-medium text-foreground shadow-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-amber-500" />
            All done! Treat yourself.
          </div>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className={cn(
              "group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all animate-fade-in hover:shadow-md",
              todo.completed && "bg-muted/40",
            )}
          >
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
              aria-label={todo.completed ? "Mark as pending" : "Mark as done"}
              className="h-5 w-5 rounded-md"
            />
            <span
              className={cn(
                "flex-1 text-sm transition-all",
                todo.completed
                  ? "text-muted-foreground line-through"
                  : "text-foreground",
              )}
            >
              {todo.text}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
              onClick={() => deleteTodo(todo.id)}
              aria-label="Delete task"
            >
              <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
            </Button>
          </div>
        ))}
      </div>

      {completedCount > 0 && (
        <div className="mt-4 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={clearCompleted}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <X className="mr-1 h-3.5 w-3.5" />
            Clear completed
          </Button>
        </div>
      )}
    </div>
  );
}
