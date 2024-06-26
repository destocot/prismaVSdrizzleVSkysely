"use client";
import { useMdStore } from "@/lib/store";
import { SubmitBtn } from "./submit-btn";

type CardProps = {
  title: string;
  action: () => void;
  db: "prisma" | "drizzle" | "kysely";
};

export const Card = ({ action, title, db }: CardProps) => {
  const pending = useMdStore((state) => state.pending);

  return (
    <div className="px-4 py-2 border border-zinc-50/5 bg-zinc-50/5 rounded flex flex-col gap-2 min-w-44">
      <h2>{title}</h2>
      <form action={action}>
        <SubmitBtn db={db} globalPending={pending}>
          GET
        </SubmitBtn>
      </form>
    </div>
  );
};
