"use client";
import {
  getUserById,
  getUserByIdWithPosts,
  getUsers,
  getUsersWithPosts,
} from "@/actions/drizzle-actions";
import { Card } from "./card";
import { useState } from "react";
import { useMdStore } from "@/lib/store";
import drizzleMarkdown from "@/actions/drizzle-actions-markdown";

type DrizzleCardsProps = {
  userId: string;
};

export const DrizzleCards = ({ userId }: DrizzleCardsProps) => {
  const [requestType, setRequestType] = useState("");
  const [perfTime, setPerfTime] = useState<number | null>(null);
  const setMarkdown = useMdStore((state) => state.setMarkdown);

  return (
    <section className="p-2 space-y-2 border-b border-zinc-50/5 ">
      <h1 className="text-3xl font-bold">Drizzle</h1>
      <div className="flex flex-wrap gap-2">
        <Card
          title="get users"
          db="drizzle"
          action={async () => {
            const res = await getUsers();
            setRequestType("GET ALL USERS");
            setPerfTime(res);
            setMarkdown(drizzleMarkdown.getUsers);
          }}
        />
        <Card
          title="get user"
          db="drizzle"
          action={async () => {
            const res = await getUserById(userId);
            setRequestType(`GET USER WHERE ID = ${userId}`);
            setPerfTime(res);
            setMarkdown(drizzleMarkdown.getUserById);
          }}
        />
        <Card
          title="get users + posts"
          db="drizzle"
          action={async () => {
            const res = await getUsersWithPosts();
            setRequestType(`GET ALL USERS WITH POSTS`);
            setPerfTime(res);
            setMarkdown(drizzleMarkdown.getUsersWithPosts);
          }}
        />
        <Card
          title="get user + posts"
          db="drizzle"
          action={async () => {
            const res = await getUserByIdWithPosts(userId);
            setRequestType(`GET USERS WHERE ID = ${userId} WITH POSTS`);
            setPerfTime(res);
            setMarkdown(drizzleMarkdown.getUserByIdWithPosts);
          }}
        />
      </div>
      <div className="h-6">
        {perfTime && (
          <p>
            {requestType}{" "}
            <span className="text-lime-500 font-semibold">
              {perfTime.toFixed()}ms
            </span>
          </p>
        )}
      </div>
    </section>
  );
};
