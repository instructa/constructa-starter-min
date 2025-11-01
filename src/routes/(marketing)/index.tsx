import { createFileRoute } from '@tanstack/react-router';
import GradientOrb from '~/components/gradient-orb';
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo, toggleTodo, deleteTodo } from '~/server/function/todos';
import { todosQueryOptions, type Todo } from '~/lib/todos/queries';
import { Button } from '~/components/ui/button';
import { toast } from 'sonner';

export const Route = createFileRoute('/(marketing)/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [getResponse, setGetResponse] = useState<string | null>(null);
  const [postResponse, setPostResponse] = useState<string | null>(null);

  const queryClient = useQueryClient();

  // Query for todos using TanStack Query
  const todosQuery = useQuery(todosQueryOptions());
  const { data: todos = [], isLoading: todosLoading, refetch: refetchTodos } = todosQuery;

  // Todo input state
  const [newTodoText, setNewTodoText] = useState('');

  // API route state
  const [apiTodos, setApiTodos] = useState<Todo[]>([]);
  const [apiNewTodoText, setApiNewTodoText] = useState('');
  const [apiLoading, setApiLoading] = useState(false);

  const handleGet = async () => {
    try {
      const res = await fetch('/api/test');
      const data = await res.json();
      setGetResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setGetResponse(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handlePost = async () => {
    try {
      const res = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: 'data', number: 42 }),
      });
      const data = await res.json();
      setPostResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setPostResponse(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Mutations with TanStack Query - calling server functions directly (like dotnize pattern)
  const createTodoMutation = useMutation({
    mutationFn: async (text: string) => {
      return await createTodo({ data: { text } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueryOptions().queryKey });
      setNewTodoText('');
      toast.success('Todo created successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create todo');
    },
  });

  const toggleTodoMutation = useMutation({
    mutationFn: async (id: string) => {
      return await toggleTodo({ data: { id } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueryOptions().queryKey });
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to toggle todo');
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id: string) => {
      return await deleteTodo({ data: { id } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueryOptions().queryKey });
      toast.success('Todo deleted successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete todo');
    },
  });

  const handleCreateTodo = () => {
    if (!newTodoText.trim()) {
      toast.error('Todo text cannot be empty');
      return;
    }
    createTodoMutation.mutate(newTodoText.trim());
  };

  const handleToggleTodo = (id: string) => {
    toggleTodoMutation.mutate(id);
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  // API route handlers
  const loadApiTodos = async () => {
    setApiLoading(true);
    try {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setApiTodos(data);
    } catch (error) {
      console.error('Failed to load todos:', error);
    } finally {
      setApiLoading(false);
    }
  };

  const handleCreateApiTodo = async () => {
    if (!apiNewTodoText.trim()) return;
    setApiLoading(true);
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: apiNewTodoText }),
      });
      const newTodo = await res.json();
      setApiTodos([...apiTodos, newTodo]);
      setApiNewTodoText('');
    } catch (error) {
      console.error('Failed to create todo:', error);
    } finally {
      setApiLoading(false);
    }
  };

  const handleToggleApiTodo = async (id: string) => {
    setApiLoading(true);
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'toggle' }),
      });
      const updated = await res.json();
      setApiTodos(apiTodos.map((t) => (t.id === id ? updated : t)));
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    } finally {
      setApiLoading(false);
    }
  };

  const handleDeleteApiTodo = async (id: string) => {
    setApiLoading(true);
    try {
      await fetch(`/api/todos/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete' }),
      });
      setApiTodos(apiTodos.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    } finally {
      setApiLoading(false);
    }
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

        {/* Todo Lists Section */}
        <div className="mt-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Server Functions Todo List */}
          <div className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Server Functions (RPC + TanStack Query)</h2>
              <Button onClick={() => refetchTodos()} disabled={todosLoading} size="sm">
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
              {todosLoading ? (
                <p className="text-muted-foreground text-sm">Loading todos...</p>
              ) : todos.length === 0 ? (
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

          {/* API Routes Todo List */}
          <div className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">API Routes (REST)</h2>
              <Button onClick={loadApiTodos} disabled={apiLoading} size="sm">
                Load
              </Button>
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={apiNewTodoText}
                onChange={(e) => setApiNewTodoText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreateApiTodo()}
                placeholder="Add todo..."
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                disabled={apiLoading}
              />
              <Button onClick={handleCreateApiTodo} disabled={apiLoading || !apiNewTodoText.trim()}>
                Add
              </Button>
            </div>

            <div className="space-y-2">
              {apiTodos.length === 0 ? (
                <p className="text-muted-foreground text-sm">No todos yet. Add one above!</p>
              ) : (
                apiTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-2 rounded-md border border-border p-3"
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleApiTodo(todo.id)}
                      disabled={apiLoading}
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
                      onClick={() => handleDeleteApiTodo(todo.id)}
                      disabled={apiLoading}
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
        </div>
      </main>
    </div>
  );
}
