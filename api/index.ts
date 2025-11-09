// Vercel Serverless Handler
// This is a thin wrapper that exports the existing Express app for Vercel

import { app, initializeApp } from "../server/index";

// Initialize the app (registers routes, middleware, etc.)
await initializeApp();

// Export for Vercel serverless functions
export default app;
