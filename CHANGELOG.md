# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-09-25

### Added
- **TanStack Start RC1** - Full-stack React framework with modern routing and server functions
- **React 19** - Latest React version with concurrent features and improved performance
- **Tailwind CSS v4** - Modern utility-first CSS framework with enhanced performance
- **shadcn/ui Integration** - Beautiful, accessible component library with pre-configured components:
  - Button, Card, Dropdown Menu components
  - Radix UI primitives for advanced interactions
- **Browser Echo** - Advanced client-side logging and debugging tool with Vite integration
- **Unplugin Icons** - Automatic icon loading and optimization system
- **TypeScript Support** - Full type safety with strict configuration and path aliases
- **Modern Development Tools**:
  - Biome for fast code formatting and linting
  - Oxlint for additional linting rules
  - Vitest for unit testing with modern API
- **TanStack Ecosystem**:
  - TanStack Query for server state management
  - TanStack Table for advanced data table functionality
  - TanStack Router Devtools for development debugging
- **UI/UX Enhancements**:
  - Framer Motion for smooth animations
  - Lucide React icons for consistent iconography
  - Sonner for toast notifications
  - Theme provider with dark/light mode support
  - Gradient orb component for visual appeal
- **Developer Experience**:
  - File-based routing with automatic route generation
  - Path aliases (`~` resolves to root `./src`)
  - Hot module replacement with Vite
  - Environment variable management
  - SEO utilities for meta tags and structured data

### Technical Features
- **Server-Side Rendering (SSR)** - Built-in SSR with TanStack Start
- **API Routes** - File-based API route handling
- **Middleware System** - Request and function middleware support
- **Error Boundaries** - Comprehensive error handling with custom boundaries
- **Build Optimization** - Production-ready build with code splitting and tree shaking
- **Security** - Modern security practices with proper environment variable handling

### Infrastructure
- **Vite 7** - Fast build tool with modern bundling
- **Node.js 22.12+** - Minimum Node.js version requirement
- **PNPM** - Fast package manager with strict dependency resolution
- **Docker Support** - Containerization ready (docker-compose)

### Documentation
- **Comprehensive README** - Setup instructions, project structure, and deployment guide
- **TanStack RC1 Upgrade Guide** - Migration documentation for framework updates

### Dependencies
- **Core Framework**: `@tanstack/react-start@^1.132.6`, `react@^19.1.0`
- **Styling**: `tailwindcss@^4.1.8`, `@tailwindcss/vite@^4.1.8`
- **UI Components**: Multiple Radix UI packages for accessible primitives
- **Development**: `@browser-echo/vite@^1.1.0`, `unplugin-icons@^22.3.0`, `@biomejs/biome@1.9.4`

### Breaking Changes
- Requires Node.js >= 22.12
- Uses TanStack Start RC1 API (may change before stable release)
- Path aliases changed from `@` to `~` for consistency

### Performance
- Optimized bundle size with tree shaking
- Fast development server with Vite HMR
- Efficient CSS processing with Tailwind v4
- Icon optimization through unplugin-icons

### Known Issues
- TanStack Start RC1 is pre-release software - some APIs may change
- Browser Echo logging requires manual initialization for SSR compatibility
