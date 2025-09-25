
<div align="center">
  <h1>Constructa Starter Min</h1>
  <p><strong>A modern Web App Starter Kit based on Tanstack Starter using React, shadcn/ui and Tailwind CSS 4</strong></p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## ✨ Features

- **[TanStack Start RC1](https://tanstack.com/start)** - Modern full-stack React framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Modern utility-first CSS framework
- **[TypeScript](https://typescriptlang.org/)** - Full type safety
- **[TanStack Router](https://tanstack.com/router)** - Type-safe file-based routing
- **[Browser Echo](https://github.com/browser-echo/browser-echo)** - Advanced client-side logging and debugging
- **[Unplugin Icons](https://github.com/antfu/unplugin-icons)** - Automatic icon loading and optimization

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **pnpm** (recommended package manager)

### Download

```bash
# Clone the starter template (replace with your repo)
npx gitpick git@github.com:instructa/constructa-starter-min.git my-app
cd my-app
```

> **Recommended:** This starter uses [gitpick](https://github.com/nrjdalal/gitpick) for easy cloning without `.git` directory, making it perfect for creating new projects from this template.

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm biome:check  # Check code formatting and linting
pnpm biome:fix:unsafe # Fix code issues (unsafe)
```

## 📁 Project Structure

```
src/
├── app/
│   ├── routes/           # File-based routing
│   │   ├── __root.tsx   # Root layout
│   │   ├── index.tsx    # Home page
│   │   └── api/         # API routes
│   └── styles/          # Global styles
├── components/
│   └── ui/              # shadcn/ui components
└── utils/               # Utility functions
```

## 🎯 Core Technologies

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **TanStack Start RC1** | Full-stack framework | [Docs](https://tanstack.com/start) |
| **shadcn/ui** | Component library | [Docs](https://ui.shadcn.com/) |
| **Tailwind CSS v4** | Styling framework | [Docs](https://tailwindcss.com/) |
| **TypeScript** | Type safety | [Docs](https://typescriptlang.org/) |
| **Browser Echo** | Client-side logging | [Docs](https://github.com/browser-echo/browser-echo) |
| **Unplugin Icons** | Icon optimization | [Docs](https://github.com/antfu/unplugin-icons) |

## 🔧 Configuration

### Adding shadcn/ui Components
```bash
# Add new components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Tailwind CSS
- Uses Tailwind CSS v4 with modern CSS-first configuration
- Configured in `app.config.ts`
- Global styles in `src/app/styles/`

### TypeScript
- **Path aliases**: `@` resolves to the root `./` directory
- **Route files**: Must use `.tsx` extension

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ using modern React tools</p>
</div>


