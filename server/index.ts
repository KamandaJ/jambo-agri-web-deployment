// api/index.ts
import express from "express";
import { registerRoutes } from "../server/routes";
import fs from "fs";
import path from "path";
import type { IncomingMessage, ServerResponse } from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let initialized = false;

async function initialize() {
  if (initialized) return;
  await registerRoutes(null as any, app);

  // Serve static files from the built client
  const publicPath = path.join(process.cwd(), "public");
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  // Fallback to index.html for SPA routing
  app.use("*", (_req, res) => {
    const indexPath = path.join(process.cwd(), "public", "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not found");
    }
  });

  initialized = true;
}

// Initialize once (async)
initialize().catch((err) => {
  console.error("Failed to initialize API:", err);
});

export default function handler(req: IncomingMessage & { url?: string }, res: ServerResponse) {
  // Express app is compatible with the serverless handler signature
  // @ts-ignore - call the express app as a function
  return (app as any)(req, res);
}