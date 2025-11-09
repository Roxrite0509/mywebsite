# Running Portfolio on VSCode Locally (Port 5000)

This is a quick guide specifically for running this project locally in VSCode using your NeonDB database.

## ✅ Prerequisites Checklist

- [ ] Node.js v18+ installed (`node --version`)
- [ ] VSCode installed
- [ ] NeonDB account created at https://console.neon.tech/
- [ ] Your NeonDB connection string copied

## 🚀 Quick Setup (5 minutes)

### Step 1: Clone/Open Project in VSCode
```bash
# Open this project folder in VSCode
code .
```

### Step 2: Install Dependencies
Open VSCode terminal (`` Ctrl+` `` or `View → Terminal`) and run:
```bash
npm install
```

### Step 3: Configure Environment Variables

**Since you've already added DATABASE_URL to Replit secrets**, you're all set for Replit!

**For local VSCode development:**

1. Create a `.env` file in the project root:
```bash
# On Windows (PowerShell):
Copy-Item .env.example .env

# On Mac/Linux:
cp .env.example .env
```

2. Open `.env` file and paste your NeonDB connection string:
```env
DATABASE_URL=postgresql://username:password@ep-xxxxx.region.aws.neon.tech/neondb?sslmode=require
PORT=5000
NODE_ENV=development
```

**To get your NeonDB connection string:**
- Go to https://console.neon.tech/
- Open your project
- Click "Connection Details"
- Copy the connection string (starts with `postgresql://`)

### Step 4: Push Database Schema to NeonDB

This creates all the tables in your NeonDB database:

```bash
npm run db:push
```

You should see output confirming tables were created:
- ✓ projects
- ✓ skills  
- ✓ code_snippets
- ✓ profile

### Step 5: Start Development Server

```bash
npm run dev
```

You should see:
```
[express] serving on port 5000
```

### Step 6: Open in Browser

Visit: **http://localhost:5000**

## 📁 Project Structure

```
portfolio/
├── client/              # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   └── App.tsx      # Main app
├── server/              # Backend (Express)
│   ├── index.ts         # Server entry
│   ├── routes.ts        # API routes
│   ├── db.ts           # Database connection
│   └── vite.ts          # Vite integration
├── shared/              # Shared code
│   └── schema.ts        # Database schema + types
├── .env                 # Your environment variables (DO NOT COMMIT)
├── .env.example         # Template for .env
└── package.json         # Dependencies
```

## 🔧 Development Workflow

### Making Code Changes
1. Edit files in VSCode
2. Changes auto-reload in browser (Vite hot reload)
3. API changes require manual save/restart if needed

### Working with Database

**View your data:**
- Open NeonDB Console: https://console.neon.tech/
- Click "Tables" to browse your data
- Use SQL Editor to run queries

**Update schema:**
1. Edit `shared/schema.ts`
2. Run `npm run db:push` to sync changes

**Example API Routes** (in `server/routes.ts`):

```typescript
// Get all projects
app.get("/api/projects", async (req, res) => {
  const allProjects = await db.select().from(projects);
  res.json(allProjects);
});

// Create a project
app.post("/api/projects", async (req, res) => {
  const newProject = await db.insert(projects).values(req.body).returning();
  res.json(newProject[0]);
});
```

## 🐛 Troubleshooting

### Port 5000 already in use
```bash
# Option 1: Change port in .env
PORT=3001

# Option 2: Kill process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill -9
```

### Database connection failed
- ✅ Check `.env` has correct DATABASE_URL
- ✅ Ensure connection string includes `?sslmode=require`
- ✅ Verify NeonDB project is active (not suspended)
- ✅ Test connection in NeonDB console

### `npm run db:push` fails
- Make sure DATABASE_URL is set in `.env`
- Check NeonDB project is accessible
- Verify you have write permissions in NeonDB

### Changes not reflecting
- Check terminal for errors
- Hard refresh browser (`Ctrl+Shift+R` or `Cmd+Shift+R`)
- Restart dev server (`Ctrl+C` then `npm run dev`)

## 📊 Database Tables

Your portfolio has 4 tables:

### 1. **projects**
```typescript
{
  id: string;              // Auto-generated UUID
  title: string;
  description: string;
  technologies: string[];  // Array of tech stack
  category: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: "yes" | "no";
}
```

### 2. **skills**
```typescript
{
  id: string;
  name: string;
  category: string;        // e.g., "Frontend", "Backend"
  icon: string;           // Icon name or path
}
```

### 3. **code_snippets**
```typescript
{
  id: string;
  title: string;
  description: string;
  code: string;           // The actual code
  language: string;       // e.g., "typescript", "python"
}
```

### 4. **profile**
```typescript
{
  id: string;
  name: string;
  tagline: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  cvUrl?: string;
}
```

## 🚢 Building for Production

```bash
# Build optimized production bundle
npm run build

# Run production server
npm start
```

## 💡 Next Steps

1. **Add your data** using NeonDB SQL Editor or API routes
2. **Customize UI** in `client/src/components`
3. **Add API routes** in `server/routes.ts`
4. **Deploy** when ready (see deployment docs)

## 📚 Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run check        # TypeScript type check
npm run db:push      # Push schema to database
```

## 🔗 Helpful Links

- [NeonDB Console](https://console.neon.tech/)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)
- [React Query Docs](https://tanstack.com/query/latest)
- [Vite Docs](https://vitejs.dev/)

---

**Need help?** Check `LOCAL_SETUP.md` for detailed documentation.
