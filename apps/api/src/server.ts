import express from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { prisma } from "@workspace/db/index";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

app.get("/api/users", async (_, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3000, () => {
  console.log(`⚡ Server running on port ${ENV.PORT} in ${ENV.NODE_ENV} mode`);
});
