import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { projects, skills, codeSnippets, profile } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - prefix all routes with /api
  
  // Health check
  app.get("/api", (req, res) => {
    res.json({ 
      status: "ok", 
      message: "Portfolio API is running",
      timestamp: new Date().toISOString()
    });
  });

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const allProjects = await db.select().from(projects);
      res.json(allProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  // Get featured projects
  app.get("/api/projects/featured", async (req, res) => {
    try {
      const featuredProjects = await db
        .select()
        .from(projects)
        .where(eq(projects.featured, "yes"));
      res.json(featuredProjects);
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      res.status(500).json({ error: "Failed to fetch featured projects" });
    }
  });

  // Get all skills
  app.get("/api/skills", async (req, res) => {
    try {
      const allSkills = await db.select().from(skills);
      res.json(allSkills);
    } catch (error) {
      console.error("Error fetching skills:", error);
      res.status(500).json({ error: "Failed to fetch skills" });
    }
  });

  // Get all code snippets
  app.get("/api/snippets", async (req, res) => {
    try {
      const allSnippets = await db.select().from(codeSnippets);
      res.json(allSnippets);
    } catch (error) {
      console.error("Error fetching code snippets:", error);
      res.status(500).json({ error: "Failed to fetch code snippets" });
    }
  });

  // Get profile
  app.get("/api/profile", async (req, res) => {
    try {
      const profileData = await db.select().from(profile).limit(1);
      res.json(profileData[0] || null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });

  // Create a new project
  app.post("/api/projects", async (req, res) => {
    try {
      const newProject = await db
        .insert(projects)
        .values(req.body)
        .returning();
      res.json(newProject[0]);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ error: "Failed to create project" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
