"use client";
import {
  getUserById,
  getUserByIdWithPosts,
  getUsers,
  getUsersWithPosts,
} from "@/actions/drizzle-actions";
import { Card } from "./card";
import { useState } from "react";

type DrizzleCardsProps = {
  userId: string;
};

export const DrizzleCards = ({ userId }: DrizzleCardsProps) => {
  const [requestType, setRequestType] = useState("");
  const [perfTime, setPerfTime] = useState<number | null>(null);

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
          }}
        />
        <Card
          title="get user"
          db="drizzle"
          action={async () => {
            const res = await getUserById(userId);
            setRequestType(`GET USER WHERE ID = ${userId}`);
            setPerfTime(res);
          }}
        />
        <Card
          title="get users + posts"
          db="drizzle"
          action={async () => {
            const res = await getUsersWithPosts();
            setRequestType(`GET ALL USERS WITH POSTS`);
            setPerfTime(res);
          }}
        />
        <Card
          title="get user + posts"
          db="drizzle"
          action={async () => {
            const res = await getUserByIdWithPosts(userId);
            setRequestType(`GET USERS WHERE ID = ${userId} WITH POSTS`);
            setPerfTime(res);
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
