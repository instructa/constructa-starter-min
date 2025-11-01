# ClientOnly

Client-only render to avoid SSR hydration issues. Import from `@tanstack/react-router`:

```typescript
import { ClientOnly } from '@tanstack/react-router';

<ClientOnly fallback={<span>—</span>}>
  <ComponentThatUsesClientHooks />
</ClientOnly>
```

Alternative: Custom implementation using mounted pattern if needed (see hydration errors below).

# Environment functions

From `@tanstack/react-start`:

## createIsomorphicFn

Adapts to client/server:

```typescript
import { createIsomorphicFn } from '@tanstack/react-start';
const getEnv = createIsomorphicFn()
  .server(() => 'server')
  .client(() => 'client');
getEnv(); // 'server' on server, 'client' on client
```

Partial: `.server()` no-op on client, `.client()` no-op on server.

## createServerOnlyFn / createClientOnlyFn

RC1: `serverOnly` → `createServerOnlyFn`, `clientOnly` → `createClientOnlyFn`

Strict environment execution (throws if called wrong env):

```typescript
import { createServerOnlyFn, createClientOnlyFn } from '@tanstack/react-start';
const serverFn = createServerOnlyFn(() => 'bar'); // throws on client
const clientFn = createClientOnlyFn(() => 'bar'); // throws on server
```

Tree-shaken: client code removed from server bundle, server code removed from client bundle.

# Hydration errors

Mismatch: Server HTML differs from client render. Common causes: Intl (locale/timezone), Date.now(), random IDs, responsive logic, feature flags, user prefs.

Strategies:
1. Make server and client match: deterministic locale/timezone on server (cookie or Accept-Language header), compute once and hydrate as initial state.
2. Let client tell environment: set cookie with client timezone on first visit, SSR uses UTC until then.
3. Make it client-only: wrap unstable UI in `<ClientOnly>` to avoid SSR mismatches.
4. Disable/limit SSR: use selective SSR (`ssr: 'data-only'` or `false`) when server HTML cannot be stable.
5. Last resort: React's `suppressHydrationWarning` for small known-different nodes (use sparingly).

Checklist: Deterministic inputs (locale, timezone, feature flags). Prefer cookies for client context. Use `<ClientOnly>` for dynamic UI. Use selective SSR when server HTML unstable. Avoid blind suppression.

# TanStack Start basics

Depends: @tanstack/react-router, Vite. Router: getRouter() (was createRouter() in beta). routeTree.gen.ts auto-generated on first dev run. Optional: server handler via @tanstack/react-start/server; client hydrate via StartClient from @tanstack/react-start/client. RC1: Import StartClient from @tanstack/react-start/client (not @tanstack/react-start). StartClient no longer requires router prop. Root route head: utf-8, viewport, title; component wraps Outlet in RootDocument. Routes: createFileRoute() code-split + lazy-load; loader runs server/client. Navigation: Link (typed), useNavigate (imperative), useRouter (instance).

# Server functions

createServerFn({ method }) + zod .inputValidator + .handler(ctx). After mutations: router.invalidate(); queryClient.invalidateQueries(['entity', id]).

# Typed Links

Link to="/posts/$postId" with params; activeProps for styling.
