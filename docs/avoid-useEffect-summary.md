
Don’t fetch or derive app state in useEffect.

1. Fetch on navigation via TanStack Router loaders (SSR + streaming). Optionally seed TanStack Query in the loader with queryClient.ensureQueryData. \[1]
2. Do server work on the server via TanStack Start Server Functions; after mutations call router.invalidate() and/or queryClient.invalidateQueries(). \[2]
3. Keep page/UI state in the URL with typed search params (validateSearch, Route.useSearch, navigate). \[3]
4. Reserve useEffect for real external side-effects only (DOM, subscriptions, analytics). \[4]\[6]

# If your useEffect was doing X → Use Y

Fetching on mount/params change → route loader (+ ensureQueryData). \[1]
Submitting/mutating → Server Function → invalidate router/queries. \[2]
Syncing UI to querystring → typed search params + navigate. \[3]
Derived state → compute during render (useMemo only if expensive). \[4]
Subscribing to external stores → useSyncExternalStore. \[5]
DOM/non-React widgets/listeners → small useEffect/useLayoutEffect. \[6]

# Idiomatic patterns (names only, no boilerplate)

Loader: queryClient.ensureQueryData(queryOptions({ queryKey, queryFn })) → useSuspenseQuery reads hydrated cache. \[1]
Mutation: createServerFn(...).handler(...) → onSuccess: qc.invalidateQueries, router.invalidate. Supports <form action={serverFn.url}> for progressive enhancement. \[2]
Search params as state: validateSearch → Route.useSearch → navigate({ search }). \[3]
External store read: useSyncExternalStore(subscribe, getSnapshot). \[5]

# Decision checklist

Data needed at render → loader (defer/stream as needed). \[1]
User changed data → Server Function → invalidate. \[2]
Belongs in URL → typed search params. \[3]
Purely derived → compute in render. \[4]
External system only → useEffect/useLayoutEffect. \[6]
SSR/SEO → loader-based fetching; configure streaming/deferred. \[7]

# React 19 helpers

useActionState for form pending/error/result (pairs with Server Functions or TanStack Form). \[8]
use to suspend on promises (client or server). \[9]

# Zustand in TanStack Start (where it fits)

Use for client/UI/session and push-based domain state (theme, modals, wizards, optimistic UI, WebSocket buffers). Keep server data in loaders/Query.
Per request store instance to avoid SSR leaks. Inject via Router context; provide with Wrap; dehydrate/hydrate via router.dehydrate/router.hydrate so snapshots stream with the page. After navigation resolution, clear transient UI (router.subscribe('onResolved', ...)).
Mutations: do work in Server Function → optionally update store optimistically → router.invalidate to reconcile with loader data.
Add persist middleware only for client/session state; avoid touching storage during SSR.
Use atomic selectors (useStore(s => slice)) and equality helpers to limit re-renders.

Docs map: \[1] Router data loading, \[2] Server Functions, \[3] Search Params, \[4] You Might Not Need an Effect, \[5] useSyncExternalStore, \[6] Synchronizing with Effects, \[7] SSR, \[8] useActionState, \[9] use.