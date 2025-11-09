# Portfolio Website

A modern, full-stack portfolio website built with React, Express, and PostgreSQL.

## Features

- 🎨 Showcase your projects with detailed descriptions and images
- 💼 Display your technical skills organized by category
- 📝 Share code snippets with syntax highlighting
- 👤 Personal profile with social media links
- 📱 Responsive design with modern UI components
- 🚀 Fast development with Vite hot reload

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite for blazing fast development
- TailwindCSS for styling
- Radix UI components
- Framer Motion for animations
- React Query for data fetching

**Backend:**
- Express.js
- NeonDB (Serverless PostgreSQL) with Drizzle ORM
- TypeScript
- RESTful API design

## Quick Start

### For Local Development (VSCode)

See [LOCAL_SETUP.md](./LOCAL_SETUP.md) for detailed instructions on running this project locally.

**Quick steps:**

1. Install dependencies:
```bash
npm install
```

2. Set up your NeonDB database:
```bash
cp .env.example .env
# Edit .env with your NeonDB connection string from https://console.neon.tech/
```

3. Push database schema:
```bash
npm run db:push
```

4. Start development server:
```bash
npm run dev
```

Visit **http://localhost:5000**

## Available Scripts

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and configs
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route handlers
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared TypeScript types
│   └── schema.ts        # Database schema & Zod validation
└── package.json
```

## Database Schema

The application uses PostgreSQL with the following tables:

- **projects** - Portfolio projects with technologies, images, and links
- **skills** - Technical skills with categories and icons
- **code_snippets** - Code examples with language syntax
- **profile** - Personal information and social links

## Customization

See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for details on customizing the portfolio to your needs.

## License

MIT
