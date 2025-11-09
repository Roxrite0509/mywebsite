# 🚀 Quick Start - Portfolio on Local VSCode

## For Replit → VSCode Migration

You've already set up your NeonDB URL in Replit secrets. Here's what you need to do for **local VSCode development**:

---

## 📦 Step 1: Install Dependencies
```bash
npm install
```

---

## 🔐 Step 2: Create Local Environment File

```bash
# Mac/Linux:
cp .env.example .env

# Windows PowerShell:
Copy-Item .env.example .env
```

---

## 🗄️ Step 3: Add Your NeonDB URL to .env

Open `.env` and paste your NeonDB connection string:

```env
DATABASE_URL=postgresql://username:password@ep-xxxxx.region.aws.neon.tech/neondb?sslmode=require
PORT=5000
NODE_ENV=development
```

**Where to get this?**
- Go to: https://console.neon.tech/
- Open your project
- Click "Connection Details"
- Copy the full connection string

---

## 🏗️ Step 4: Create Database Tables

This pushes your schema to NeonDB and creates all tables:

```bash
npm run db:push
```

**Tables created:**
- ✅ projects
- ✅ skills
- ✅ code_snippets
- ✅ profile

---

## ▶️ Step 5: Start Development Server

```bash
npm run dev
```

---

## 🌐 Step 6: Open in Browser

**http://localhost:5000**

---

## ✅ That's It!

You're now running locally on port 5000 with your NeonDB database.

---

## 🔄 Daily Workflow

```bash
# Start coding:
npm run dev

# Make changes to schema:
# 1. Edit shared/schema.ts
# 2. Run:
npm run db:push

# Type check:
npm run check

# Build for production:
npm run build
npm start
```

---

## 📁 Key Files for Local Development

| File | What to Put Here |
|------|------------------|
| `.env` | Your NeonDB URL (NEVER commit this!) |
| `server/routes.ts` | Your API endpoints |
| `shared/schema.ts` | Database table definitions |
| `client/src/pages/` | Your React pages |

---

## 🆘 Common Issues

**"Port 5000 already in use"**
```bash
# Change port in .env:
PORT=3001
```

**"Database connection failed"**
- Check DATABASE_URL in `.env`
- Verify connection string has `?sslmode=require`
- Ensure NeonDB project is active

**"Tables not created"**
```bash
npm run db:push
```

---

## 📚 Full Documentation

- **VSCode Quick Guide**: `VSCODE_LOCAL_SETUP.md`
- **Detailed Setup**: `LOCAL_SETUP.md`  
- **Configuration Summary**: `SETUP_SUMMARY.md`
- **Project Overview**: `README.md`

---

**Happy coding! 🎨**
