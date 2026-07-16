import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResponseSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quiz routes
  app.post("/api/quiz-responses", async (req, res) => {
    try {
      const validatedData = insertQuizResponseSchema.parse(req.body);
      const response = await storage.createQuizResponse(validatedData);
      res.json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/quiz-responses/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const responses = await storage.getQuizResponsesBySession(sessionId);
      res.json(responses);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

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
