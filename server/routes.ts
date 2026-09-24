import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Psychology resources routes
  app.get("/api/psychology-resources", async (req, res) => {
    try {
      const { category } = req.query;
      let resources;
      
      if (category && typeof category === 'string') {
        resources = await storage.getPsychologyResourcesByCategory(category);
      } else {
        resources = await storage.getPsychologyResources();
      }
      
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
