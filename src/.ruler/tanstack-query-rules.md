# TanStack Query Rules

Server state via TanStack Query + server functions. Type-safe fetching and mutations.

## Query Pattern

Define in `lib/{resource}/queries.ts` using `queryOptions`:

```typescript
export const todosQueryOptions = () =>
  queryOptions({
    queryKey: ['todos'],
    queryFn: async ({ signal }) => await getTodos({ signal }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
```

Use: `const { data, isLoading } = useQuery(todosQueryOptions())`. Prefer `useSuspenseQuery` with Suspense.

## Server Functions in Queries

Call server functions directly in `queryFn`. No `useServerFn` hook. TanStack Start proxies. Pass `signal` for cancellation.

## Mutation Pattern

```typescript
const mutation = useMutation({
  mutationFn: async (text: string) => await createTodo({ data: { text } }),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: todosQueryOptions().queryKey });
    toast.success('Success');
  },
  onError: (error) => toast.error(error.message || 'Failed'),
});
```

Call via `mutation.mutate(data)` or `mutateAsync` for promises.

## Query Invalidation

After mutations: `queryClient.invalidateQueries({ queryKey: ... })`. Use specific keys, not broad.

## Mutation States

Access: `isPending`, `isError`, `isSuccess`, `error`, `data`. Disable UI during `isPending`.

## Error Handling

Handle in `onError`. Toast messages. Access: `error.message || 'Default'`.

## Query Keys

Hierarchical: `['todos']`, `['todo', id]`, `['todos', 'completed']`. Include all affecting variables.

## Stale Time vs GC Time

`staleTime`: freshness duration (no refetch). Default 0. Set for stable data.
`gcTime`: unused cache duration (was `cacheTime`). Default 5min. Memory management.

## Infinite Queries

`useInfiniteQuery` for pagination. Required: `initialPageParam`, `getNextPageParam`, `fetchNextPage`. Access `data.pages`. Check `hasNextPage` before fetching.

## Optimistic Updates

`onMutate` for optimistic updates. Rollback in `onError`. Update cache via `queryClient.setQueryData`.

## Best Practices

1. Queries in `lib/{resource}/queries.ts` with `queryOptions`
2. Call server functions directly (no `useServerFn` in callbacks)
3. Invalidate after mutations
4. Toast for feedback
5. Handle loading/error states
6. Use TypeScript types from query options
7. Set `staleTime`/`gcTime` appropriately
8. Prefer `useSuspenseQuery` with Suspense
