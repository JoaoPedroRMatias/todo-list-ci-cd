import { useState, type FormEvent, type KeyboardEvent } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { useTodos } from "@/hooks/useTodos";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function TodoApp() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [input, setInput] = useState("");

  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount = todos.length - completedCount;

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
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Tasks
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {pendingCount} pending · {completedCount} done
        </p>
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
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-12 text-center">
            <p className="text-sm text-muted-foreground">
              No tasks yet. Add one above.
            </p>
          </div>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className={cn(
              "group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors",
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
