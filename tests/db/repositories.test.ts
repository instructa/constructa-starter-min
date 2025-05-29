import { describe, it, expect, beforeAll, afterAll } from "vitest"

import { db } from "@/database/client"
import { userRepo } from "@/database/repositories/user.repo"
import { profileRepo } from "@/database/repositories/profile.repo"
import { fileRepo } from "@/database/repositories/file.repo"
import { createAllTestData, deleteAllTestData } from "@/database/test-data"
import { Repository } from "drizzle-repository-generator"
import { user as userTable } from "@/database/schema"

describe("Repository smoke tests", () => {
  beforeAll(async () => {
    await createAllTestData()
  })

  afterAll(async () => {
    await deleteAllTestData()
  })

  it("userRepo: INSERT returns row", async () => {
    const row = await userRepo.insert({
      id: "repo-user-1",
      name: "Repo Alice",
      email: "repoalice@example.com",
      emailVerified: false,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    expect(row?.name).toBe("Repo Alice")
  })

  it("userRepo: UPSERT (onConflict update) works", async () => {
    const row = await userRepo.insert(
      {
        id: "test-user-1",
        name: "Alice Updated",
        email: "alice@example.com",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { onConflict: "update" }
    )
    expect(row?.name).toBe("Alice Updated")
  })

  it("userRepo: UPDATE returns updated row", async () => {
    const row = await userRepo
      .update({ name: "Changed" })
      .where({ id: "test-user-1" })
    expect(row?.name).toBe("Changed")
  })

  it("userRepo: DELETE removes row", async () => {
    await userRepo.delete({ id: "repo-user-1" })
    const deleted = await userRepo.find({ id: "repo-user-1" }).returnFirst()
    expect(deleted).toBeNull()
  })

  it("userRepo: operations inside a transaction commit", async () => {
    await db.transaction(async (tx) => {
      const txUserRepo = Repository(tx, userTable)
      const row = await txUserRepo.insert({
        id: "tx-user",
        name: "TX",
        email: "tx@ex.com",
        emailVerified: false,
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      expect(row?.name).toBe("TX")
    })
    const txRow = await userRepo.find({ id: "tx-user" }).returnFirst()
    expect(txRow?.email).toBe("tx@ex.com")
  })

  it("profileRepo and fileRepo respond to simple queries", async () => {
    const profileRow = await profileRepo.find({ id: "test-user-1" }).returnFirst()
    expect(profileRow?.username).toBe("alice_test")

    const fileRow = await fileRepo.find({ id: "file-1" }).returnFirst()
    expect(fileRow?.name).toBe("file1.txt")
  })
})