"use server";
import prisma from "@/lib/prisma.db";
import { users } from "@prisma/client";
import { performance } from "perf_hooks";

export async function getUsers() {
  const startTime = performance.now();

  console.log("HERE PRIS 1");
  await prisma.users
    .findMany()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  console.log("HERE PRIS 2");
  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserById(id: users["id"]) {
  const startTime = performance.now();

  await prisma.users.findUnique({ where: { id } });
  // .then((res) => console.log(res));

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUsersWithPosts() {
  const startTime = performance.now();

  await prisma.users.findMany({ include: { posts: true } });
  // .then((res) => console.log(res));

  const endTime = performance.now();

  return endTime - startTime;
}

export async function getUserByIdWithPosts(id: users["id"]) {
  const startTime = performance.now();

  await prisma.users.findUnique({ where: { id }, include: { posts: true } });
  // .then((res) => console.log(res));

  const endTime = performance.now();

  return endTime - startTime;
}
