import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table for basic authentication if needed
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Quiz responses table to store assessment results
export const quizResponses = pgTable("quiz_responses", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  responses: jsonb("responses").notNull(),
  score: integer("score").notNull(),
  interpretation: text("interpretation").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Psychology articles/resources table
export const psychologyResources = pgTable("psychology_resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  type: text("type").notNull(), // 'book', 'article', 'research', 'organization'
  author: text("author"),
  description: text("description"),
  year: integer("year"),
  publisher: text("publisher"),
  category: text("category").notNull(), // 'giftedness', 'psychology', 'psychiatry'
  featured: boolean("featured").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertQuizResponseSchema = createInsertSchema(quizResponses).pick({
  sessionId: true,
  responses: true,
  score: true,
  interpretation: true,
});

export const insertPsychologyResourceSchema = createInsertSchema(psychologyResources).pick({
  title: true,
  type: true,
  author: true,
  description: true,
  year: true,
  publisher: true,
  category: true,
  featured: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type QuizResponse = typeof quizResponses.$inferSelect;
export type InsertQuizResponse = z.infer<typeof insertQuizResponseSchema>;
export type PsychologyResource = typeof psychologyResources.$inferSelect;
export type InsertPsychologyResource = z.infer<typeof insertPsychologyResourceSchema>;
