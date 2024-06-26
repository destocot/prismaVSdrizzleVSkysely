"use client";
import {
  getUserById,
  getUserByIdWithPosts,
  getUsers,
  getUsersWithPosts,
} from "@/actions/kysely-actions";
import { Card } from "./card";
import { useState } from "react";
import { useMdStore } from "@/lib/store";
import kyselyMarkdown from "@/actions/kysely-actions-markdown";

type KyselyCardsProps = { userId: string };

export const KyselyCards = ({ userId }: KyselyCardsProps) => {
  const [requestType, setRequestType] = useState("");
  const [perfTime, setPerfTime] = useState<number | null>(null);
  const setMarkdown = useMdStore((state) => state.setMarkdown);

  return (
    <section className="p-2 space-y-2 border-b border-zinc-50/5 ">
      <h1 className="text-3xl font-bold">Kysely</h1>
      <div className="flex flex-wrap gap-2">
        <Card
          title="get users"
          db="kysely"
          action={async () => {
            const res = await getUsers();
            setRequestType("GET ALL USERS");
            setPerfTime(res);
            setMarkdown(kyselyMarkdown.getUsers);
          }}
        />
        <Card
          title="get user"
          db="kysely"
          action={async () => {
            const res = await getUserById(userId);
            setRequestType(`GET USER WHERE ID = ${userId}`);
            setPerfTime(res);
            setMarkdown(kyselyMarkdown.getUserById);
          }}
        />
        <Card
          title="get users + posts"
          db="kysely"
          action={async () => {
            const res = await getUsersWithPosts();
            setRequestType(`GET ALL USERS WITH POSTS`);
            setPerfTime(res);
            setMarkdown(kyselyMarkdown.getUsersWithPosts);
          }}
        />
        <Card
          title="get user + posts"
          db="kysely"
          action={async () => {
            const res = await getUserByIdWithPosts(userId);
            setRequestType(`GET USERS WHERE ID = ${userId} WITH POSTS`);
            setPerfTime(res);
            setMarkdown(kyselyMarkdown.getUserByIdWithPosts);
          }}
        />
      </div>
      <div className="h-6">
        {perfTime && (
          <p>
            {requestType}{" "}
            <span className="text-sky-500 font-semibold">
              {perfTime.toFixed()}ms
            </span>
          </p>
        )}
      </div>
    </section>
  );
};
