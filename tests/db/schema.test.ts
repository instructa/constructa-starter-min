import { describe, it, expect } from "vitest"
import { user } from "@/database/schema/auth.schema"

describe("Database schema", () => {
  it("user table is defined", () => {
    expect(user).toBeDefined()
  })
})