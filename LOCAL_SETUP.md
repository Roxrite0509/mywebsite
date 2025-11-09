# Local Development Setup Guide

This guide will help you run this portfolio project locally on VSCode using NeonDB.

## Prerequisites

- Node.js (v18 or higher)
- NeonDB account (free tier available at https://neon.tech)
- VSCode (or any code editor)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup with NeonDB

This project is configured to use **NeonDB** (serverless PostgreSQL).

1. **Create a NeonDB account** (if you don't have one):
   - Go to https://console.neon.tech/
   - Sign up for a free account

2. **Create a new project** in NeonDB:
   - Click "Create Project"
   - Choose a name (e.g., "portfolio-db")
   - Select a region closest to you
   - Click "Create Project"

3. **Get your connection string**:
   - In your project dashboard, click "Connection Details"
   - Copy the connection string that looks like:
   ```
   postgresql://username:password@ep-xxxxx.region.aws.neon.tech/neondb?sslmode=require
   ```

### 3. Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` and paste your NeonDB connection string:
```
DATABASE_URL=postgresql://username:password@ep-xxxxx.region.aws.neon.tech/neondb?sslmode=require
```

### 4. Run Database Migrations

Generate and push the schema to your database:

```bash
npm run db:push
```

This will create the following tables:
- `projects` - Your portfolio projects
- `skills` - Your technical skills
- `code_snippets` - Code examples to showcase
- `profile` - Your profile information

### 5. Start the Development Server

```bash
npm run dev
```

The application will start on **http://localhost:5000**

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   └── App.tsx      # Main app component
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API routes
│   └── vite.ts      # Vite dev server setup
├── shared/          # Shared types and schemas
│   └── schema.ts    # Database schema definitions
└── package.json
```

## Database Schema

The project includes four main tables:

1. **projects** - Portfolio projects with title, description, technologies, images, and links
2. **skills** - Technical skills categorized by type
3. **code_snippets** - Code examples with syntax highlighting
4. **profile** - Your personal information and social links

## Development

- Frontend runs on Vite dev server (hot reload enabled)
- Backend API runs on Express
- Both are served from port 5000
- API routes should be prefixed with `/api`

## Building for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Port already in use
If port 5000 is already in use, you can change it in `.env`:
```
PORT=3000
```

### Database connection errors
- Verify your NeonDB connection string is correct
- Make sure you copied the full connection string including `?sslmode=require`
- Check that your NeonDB project is active (free tier may suspend after inactivity)
- Ensure your IP is allowed (NeonDB free tier allows all IPs by default)

### Migration issues
If you need to reset the database:
```bash
npm run db:push
```

## Next Steps

1. Add your profile data to the `profile` table
2. Add your projects to the `projects` table
3. Add your skills to the `skills` table
4. Customize the UI components in `client/src/components`
