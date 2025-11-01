import { createFileRoute } from '@tanstack/react-router';
import GradientOrb from '~/components/gradient-orb';
import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import {
  todosQueries,
  useCreateTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
  type Todo,
} from '~/lib/todos/queries';
import { Button } from '~/components/ui/button';
import axios from 'redaxios';
import { toast } from 'sonner';

export const Route = createFileRoute('/(marketing)/')({
  loader: async (opts) => {
    await opts.context.queryClient.ensureQueryData(todosQueries.list());
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [getResponse, setGetResponse] = useState<string | null>(null);
  const [postResponse, setPostResponse] = useState<string | null>(null);

  // Query for todos using TanStack Query (suspense)
  const todosQuery = useSuspenseQuery(todosQueries.list());
  const { data: todos = [], refetch: refetchTodos } = todosQuery;

  // Mutations
  const createTodoMutation = useCreateTodoMutation();
  const toggleTodoMutation = useToggleTodoMutation();
  const deleteTodoMutation = useDeleteTodoMutation();

  // Todo input state
  const [newTodoText, setNewTodoText] = useState('');

  const handleGet = async () => {
    try {
      const res = await axios.get('/api/test');
      setGetResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setGetResponse(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handlePost = async () => {
    try {
      const res = await axios.post('/api/test', { test: 'data', number: 42 });
      setPostResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setPostResponse(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleCreateTodo = () => {
    if (!newTodoText.trim()) {
      toast.error('Todo text cannot be empty');
      return;
    }
    createTodoMutation.mutate(newTodoText.trim());
    setNewTodoText('');
  };

  const handleToggleTodo = (id: string) => {
    toggleTodoMutation.mutate(id);
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Hero Section */}
      <main className="container relative z-0 mx-auto flex flex-col items-center px-4 pt-20 text-center md:pt-32">
        <GradientOrb className="-translate-x-1/2 absolute top-0 left-1/2 z-[-1] transform" />

        <h1 className="max-w-4xl font-medium text-4xl text-foreground md:text-6xl lg:text-7xl">
          TanStack Start React boilerplate with Tailwind 4 & shadcn
        </h1>

        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          The perfect starting point for your next web application
        </p>

        <p className="mt-4 text-muted-foreground text-xs uppercase tracking-wider">
          Under heavy development
        </p>

        {/* API Test Section */}
        <div className="mt-12 w-full max-w-2xl space-y-6 rounded-lg border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold">API Test</h2>

          <div className="space-y-4">
            <div>
              <Button onClick={handleGet}>Test GET</Button>
              {getResponse && (
                <pre className="mt-2 rounded-md bg-muted p-4 text-left text-sm overflow-auto">
                  {getResponse}
                </pre>
              )}
            </div>

            <div>
              <Button onClick={handlePost}>Test POST</Button>
              {postResponse && (
                <pre className="mt-2 rounded-md bg-muted p-4 text-left text-sm overflow-auto">
                  {postResponse}
                </pre>
              )}
            </div>
          </div>
        </div>

        {/* Todo List Section */}
        <div className="mt-12 w-full max-w-2xl space-y-6 rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Todos (Server Functions + TanStack Query)</h2>
            <Button onClick={() => refetchTodos()} size="sm">
              Refresh
            </Button>
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreateTodo()}
              placeholder="Add todo..."
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              disabled={createTodoMutation.isPending}
            />
            <Button
              onClick={handleCreateTodo}
              disabled={createTodoMutation.isPending || !newTodoText.trim()}
            >
              {createTodoMutation.isPending ? 'Adding...' : 'Add'}
            </Button>
          </div>

          <div className="space-y-2">
            {todos.length === 0 ? (
              <p className="text-muted-foreground text-sm">No todos yet. Add one above!</p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-2 rounded-md border border-border p-3"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    disabled={
                      toggleTodoMutation.isPending ||
                      deleteTodoMutation.isPending ||
                      createTodoMutation.isPending
                    }
                    className="rounded"
                  />
                  <span
                    className={`flex-1 text-sm ${
                      todo.completed ? 'line-through text-muted-foreground' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                  <Button
                    onClick={() => handleDeleteTodo(todo.id)}
                    disabled={
                      toggleTodoMutation.isPending ||
                      deleteTodoMutation.isPending ||
                      createTodoMutation.isPending
                    }
                    variant="destructive"
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
