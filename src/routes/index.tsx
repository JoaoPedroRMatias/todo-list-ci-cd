import { createFileRoute } from "@tanstack/react-router";
import { TodoApp } from "@/components/TodoApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tasks — Simple To-Do List" },
      { name: "description", content: "A clean, simple to-do list app." },
      { property: "og:title", content: "Tasks — Simple To-Do List" },
      { property: "og:description", content: "A clean, simple to-do list app." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <TodoApp />
    </div>
  );
}

