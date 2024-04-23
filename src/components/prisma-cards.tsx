"use client";
import {
  getUserById,
  getUserByIdWithPosts,
  getUsers,
  getUsersWithPosts,
} from "@/actions/prisma-actions";
import { Card } from "./card";
import { users } from "@prisma/client";
import { useState } from "react";
import { useMdStore } from "@/lib/store";
import prismaMarkdown from "@/actions/prisma-actions-markdown";

type PrismaCardsProps = { userId: users["id"] };

export const PrismaCards = ({ userId }: PrismaCardsProps) => {
  const [requestType, setRequestType] = useState("");
  const [perfTime, setPerfTime] = useState<number | null>(null);
  const setMarkdown = useMdStore((state) => state.setMarkdown);

  return (
    <section className="p-2 space-y-2 border-b border-zinc-50/5 ">
      <h1 className="text-3xl font-bold">Prisma</h1>
      <div className="flex flex-wrap gap-2">
        <Card
          title="get users"
          db="prisma"
          action={async () => {
            const res = await getUsers();
            setRequestType("GET ALL USERS");
            setPerfTime(res);
            setMarkdown(prismaMarkdown.getUsers);
          }}
        />
        <Card
          title="get user"
          db="prisma"
          action={async () => {
            const res = await getUserById(userId);
            setRequestType(`GET USER WHERE ID = ${userId}`);
            setPerfTime(res);
            setMarkdown(prismaMarkdown.getUserById);
          }}
        />
        <Card
          title="get users + posts"
          db="prisma"
          action={async () => {
            const res = await getUsersWithPosts();
            setRequestType(`GET ALL USERS WITH POSTS`);
            setPerfTime(res);
            setMarkdown(prismaMarkdown.getUsersWithPosts);
          }}
        />
        <Card
          title="get user + posts"
          db="prisma"
          action={async () => {
            const res = await getUserByIdWithPosts(userId);
            setRequestType(`GET USERS WHERE ID = ${userId} WITH POSTS`);
            setPerfTime(res);
            setMarkdown(prismaMarkdown.getUserByIdWithPosts);
          }}
        />
      </div>
      <div className="h-6">
        {perfTime && (
          <p>
            {requestType}{" "}
            <span className="text-violet-500 font-semibold">
              {perfTime.toFixed()}ms
            </span>
          </p>
        )}
      </div>
    </section>
  );
};
