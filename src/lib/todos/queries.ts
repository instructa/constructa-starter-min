import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodos, createTodo, toggleTodo, deleteTodo } from '~/server/function/todos';
import { toast } from 'sonner';

export type Todo = { id: string; text: string; completed: boolean };

export const todosQueries = {
  list: () =>
    queryOptions({
      queryKey: ['todos'],
      queryFn: async ({ signal }) => await getTodos({ signal }),
      staleTime: 1000 * 60 * 5,
    }),
};

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (text: string) => await createTodo({ data: { text } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueries.list().queryKey });
      toast.success('Todo created successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create todo');
    },
  });
}

export function useToggleTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await toggleTodo({ data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueries.list().queryKey });
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to toggle todo');
    },
  });
}

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await deleteTodo({ data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todosQueries.list().queryKey });
      toast.success('Todo deleted successfully!');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete todo');
    },
  });
}
