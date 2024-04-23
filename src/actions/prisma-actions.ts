"use server";
import prisma from "@/lib/prisma.db";
import { users } from "@prisma/client";
import { performance } from "perf_hooks";

export async function getUsers() {
  const startTime = performance.now();

  await prisma.users.findMany();

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserById(id: users["id"]) {
  const startTime = performance.now();

  await prisma.users.findUnique({ where: { id } });

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUsersWithPosts() {
  const startTime = performance.now();

  await prisma.users.findMany({ include: { posts: true } });

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserByIdWithPosts(id: users["id"]) {
  const startTime = performance.now();

  await prisma.users.findUnique({ where: { id }, include: { posts: true } });

  const endTime = performance.now();

  return endTime - startTime;
}
