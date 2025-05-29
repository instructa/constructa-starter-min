# 🚀 TanStack Starter

<div align="center">
  <p><strong>A modern, full-stack React starter built with TanStack's cutting-edge tools</strong></p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
</div>

## ✨ Features

### 🏗️ **Core Framework**
- **[TanStack Start](https://tanstack.com/start)** - Modern full-stack React framework
- **[React 19](https://react.dev/)** - Latest React with enhanced performance
- **[TypeScript](https://typescriptlang.org/)** - Full type safety throughout

### 🛣️ **Routing & Data**
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing with file-based routing
- **[TanStack Query](https://tanstack.com/query)** - Powerful data fetching and caching
- **[TanStack Table](https://tanstack.com/table)** - Headless table components

### 🎨 **UI & Styling**
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Modern utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://radix-ui.com/)** - Unstyled, accessible components
- **[Framer Motion](https://framer.com/motion/)** - Smooth animations and transitions
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icons
- **Theme Support** - Dark/light mode with `next-themes`

### 🛠️ **Developer Experience**
- **[Vinxi](https://vinxi.vercel.app/)** - Modern build tool and dev server
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[pnpm](https://pnpm.io/)** - Efficient package manager

### 🤖 **Advanced Features**
- **[AI SDK](https://sdk.vercel.ai/)** - AI-powered functionality
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database toolkit
- **API Routes** - Built-in API support
- **File Uploads** - Ready-to-use upload functionality

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **pnpm** (recommended package manager)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd tanstack-starter-instructa

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

# Testing
pnpm test         # Run tests with Vitest

# Database
pnpm db:generate  # Generate database migrations
pnpm db:migrate   # Run database migrations
pnpm db:pull      # Pull database schema

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
│   ├── dashboard/       # Dashboard features
│   └── styles/          # Global styles
├── components/
│   └── ui/              # shadcn/ui components
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
```

## 🎯 Key Technologies

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **TanStack Start** | Full-stack framework | [Docs](https://tanstack.com/start) |
| **TanStack Router** | Type-safe routing | [Docs](https://tanstack.com/router) |
| **TanStack Query** | Data fetching | [Docs](https://tanstack.com/query) |
| **Tailwind CSS** | Styling framework | [Docs](https://tailwindcss.com/) |
| **shadcn/ui** | Component library | [Docs](https://ui.shadcn.com/) |
| **Drizzle ORM** | Database toolkit | [Docs](https://orm.drizzle.team/) |

## 🔧 Configuration

### Environment Setup
Create a `.env.local` file in the root directory for environment variables:

```env
# Database
DATABASE_URL="your-database-url"

# Add other environment variables as needed
```

### Tailwind CSS
The project uses Tailwind CSS v4 with the new CSS-first configuration. Styles are configured in:
- `app.config.ts` - Vite plugin configuration
- Global styles in `src/app/styles/`

### TypeScript
- **Path aliases**: `@` resolves to the root `./` directory
- **Strict mode**: Enabled for maximum type safety
- **Route files**: Must use `.tsx` extension

## 🧪 Testing

This starter includes Vitest for fast, modern testing:

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch
```

Test files should be placed alongside your source files with `.test.ts` or `.test.tsx` extensions.

## 📱 Component Library

The project includes a comprehensive set of shadcn/ui components:
- **Navigation**: Sidebar, Breadcrumb, Tabs
- **Forms**: Input, Label, Select, Checkbox, Switch
- **Feedback**: Toast (Sonner), Tooltip, Badge
- **Layout**: Card, Separator, Sheet, Dialog
- **Data**: Table, Chart
- **And many more...**

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

The application is built with TanStack Start and can be deployed to any Node.js hosting platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ using TanStack's modern React ecosystem</p>
</div>


