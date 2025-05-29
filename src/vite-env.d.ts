/// <reference types="vite/client" />

// Allow importing CSS files as URLs (e.g. `custom.css?url`)
declare module "*.css?url" {
  const cssUrl: string
  export default cssUrl
} 