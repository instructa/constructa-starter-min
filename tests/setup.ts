import "@testing-library/jest-dom/vitest"

// ensure env vars are loaded before any database import
import dotenv from "dotenv"
dotenv.config({ path: ".env.test" })

// provide a safe default for tests
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL =
    "postgresql://user:password@localhost:5432/ex0"
} else {
  try {
    const url = new URL(process.env.DATABASE_URL)
    // if the URL has no password, inject defaults that match the local container
    if (!url.password) {
      if (!url.username) url.username = "postgres"
      url.password = "postgres"
      process.env.DATABASE_URL = url.toString()
    }
  } catch {
    // ignore malformed URLs and keep the original value
  }
}