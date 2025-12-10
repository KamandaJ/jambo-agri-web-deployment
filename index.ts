import type { VercelRequest, VercelResponse } from "@vercel/functions";
import express, { type Express } from "express";
import { registerRoutes } from "../server/routes";
import fs from "fs";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register all your API routes
async function initializeApi() {
  await registerRoutes(null as any, app);

  // Serve static files from the built client
  const publicPath = path.join(process.cwd(), "public");
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
  }

  // Fallback to index.html for SPA routing
  app.use("*", (_req, res) => {
    const indexPath = path.join(publicPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not found");
    }
  });
}

initializeApi();

export default async (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};