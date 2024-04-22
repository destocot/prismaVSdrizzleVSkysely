"use server";
import drizzle from "@/lib/drizzle.db";
import { performance } from "perf_hooks";
import { posts, users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export async function getUsers() {
  const startTime = performance.now();

  await drizzle.select().from(users);
  // .then((res) => console.log(res));

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserById(id: string) {
  const startTime = performance.now();

  await drizzle.select().from(users).where(eq(users.id, id));
  // .then((res) => console.log(res));

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUsersWithPosts() {
  const startTime = performance.now();

  await drizzle
    .select()
    .from(users)
    .leftJoin(posts, eq(users.id, posts.authorId));
  // .then((res) => console.log(res));

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserByIdWithPosts(id: string) {
  const startTime = performance.now();

  await drizzle
    .select({ users: { ...users, posts } })
    .from(users)
    .where(eq(users.id, id))
    .leftJoin(posts, eq(users.id, posts.authorId));
  // .then((res) => console.log(res));

  const endTime = performance.now();

  return endTime - startTime;
}
