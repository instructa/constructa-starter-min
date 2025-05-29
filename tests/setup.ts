import "@testing-library/jest-dom/vitest"

// ensure env vars are loaded before any database import
import dotenv from "dotenv"
dotenv.config({ path: ".env.test" })
