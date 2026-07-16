import { 
  users, 
  quizResponses, 
  psychologyResources,
  type User, 
  type InsertUser,
  type QuizResponse,
  type InsertQuizResponse,
  type PsychologyResource,
  type InsertPsychologyResource
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Quiz responses
  createQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  getQuizResponsesBySession(sessionId: string): Promise<QuizResponse[]>;
  
  // Psychology resources
  getPsychologyResources(): Promise<PsychologyResource[]>;
  getPsychologyResourcesByCategory(category: string): Promise<PsychologyResource[]>;
  createPsychologyResource(resource: InsertPsychologyResource): Promise<PsychologyResource>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private quizResponses: Map<number, QuizResponse>;
  private psychologyResources: Map<number, PsychologyResource>;
  private currentUserId: number;
  private currentQuizId: number;
  private currentResourceId: number;

  constructor() {
    this.users = new Map();
    this.quizResponses = new Map();
    this.psychologyResources = new Map();
    this.currentUserId = 1;
    this.currentQuizId = 1;
    this.currentResourceId = 1;
    
    // Initialize with some sample psychology resources
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleResources: InsertPsychologyResource[] = [
      {
        title: "Handbook of Giftedness in Children",
        type: "book",
        author: "Pfeiffer, S. I.",
        description: "Comprehensive guide to understanding giftedness in children",
        year: 2018,
        publisher: "Springer International Publishing",
        category: "giftedness",
        featured: true
      },
      {
        title: "Neurobiology of Intelligence",
        type: "article",
        author: "Jung, R. E. & Haier, R. J.",
        description: "Research on the neurobiological basis of intelligence",
        year: 2018,
        publisher: "Nature Reviews Neuroscience",
        category: "psychology",
        featured: true
      }
    ];

    sampleResources.forEach(resource => {
      this.createPsychologyResource(resource);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createQuizResponse(insertResponse: InsertQuizResponse): Promise<QuizResponse> {
    const id = this.currentQuizId++;
    const response: QuizResponse = { 
      ...insertResponse, 
      id,
      createdAt: new Date()
    };
    this.quizResponses.set(id, response);
    return response;
  }

  async getQuizResponsesBySession(sessionId: string): Promise<QuizResponse[]> {
    return Array.from(this.quizResponses.values()).filter(
      (response) => response.sessionId === sessionId
    );
  }

  async getPsychologyResources(): Promise<PsychologyResource[]> {
    return Array.from(this.psychologyResources.values());
  }

  async getPsychologyResourcesByCategory(category: string): Promise<PsychologyResource[]> {
    return Array.from(this.psychologyResources.values()).filter(
      (resource) => resource.category === category
    );
  }

  async createPsychologyResource(insertResource: InsertPsychologyResource): Promise<PsychologyResource> {
    const id = this.currentResourceId++;
    const resource: PsychologyResource = { 
      ...insertResource, 
      id,
      description: insertResource.description || null,
      author: insertResource.author || null,
      year: insertResource.year || null,
      publisher: insertResource.publisher || null,
      featured: insertResource.featured || false
    };
    this.psychologyResources.set(id, resource);
    return resource;
  }
}

export const storage = new MemStorage();
