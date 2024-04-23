"use server";
import kysely from "@/lib/kysely.db";
import { performance } from "perf_hooks";

export async function getUsers() {
  const startTime = performance.now();

  await kysely.selectFrom("users").selectAll().execute();

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserById(id: string) {
  const startTime = performance.now();

  await kysely
    .selectFrom("users")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUsersWithPosts() {
  const startTime = performance.now();

  await kysely
    .selectFrom("users")
    .innerJoin("posts", "users.id", "posts.author_id")
    .selectAll()
    .execute();

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserByIdWithPosts(id: string) {
  const startTime = performance.now();

  await kysely
    .selectFrom("users")
    .where("users.id", "=", id)
    .innerJoin("posts", "users.id", "posts.author_id")
    .selectAll()
    .execute();

  const endTime = performance.now();

  return endTime - startTime;
}
