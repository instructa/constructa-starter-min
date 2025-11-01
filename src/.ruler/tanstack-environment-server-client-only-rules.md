# ClientOnly

* Client-only render to avoid SSR hydration issues
* Props: fallback (loading UI), children (post-hydration UI)

# Environment functions

* createIsomorphicFn(): env-specific implementation (server/client)
* **RC1 Update**: `serverOnly` → `createServerOnlyFn`, `clientOnly` → `createClientOnlyFn`
  * Use `createServerOnlyFn(fn)` instead of `serverOnly(fn)`
  * Use `createClientOnlyFn(fn)` instead of `clientOnly(fn)`
* Tree-shaken per bundle (client stripped from server, and vice versa)

# TanStack Start basics

* Depends: @tanstack/react-router, Vite
* Router: `getRouter()` (was `createRouter()` in beta)
* routeTree.gen.ts auto-generated on first dev run (module declaration now auto-generated here)
* Optional entries: server handler via @tanstack/react-start/server; client hydrate via `StartClient` from `@tanstack/react-start/client`
* **RC1 Client Entry**: Import `StartClient` from `@tanstack/react-start/client` (not `@tanstack/react-start`). `<StartClient />` no longer requires router prop.
* Root route head: utf-8, viewport, title; component wraps Outlet in RootDocument
* Routes: createFileRoute() ⇒ code-split + lazy-load; loader runs server/client
* Navigation: Link (typed), useNavigate (imperative), useRouter (instance)

# Server functions (RPCs)

* createServerFn({ method }) + zod .inputValidator + .handler(ctx)
* After mutations: router.invalidate(); queryClient.invalidateQueries(\['entity', id])

# Typed Links

* Link to="/posts/\$postId" with params; activeProps for styling
