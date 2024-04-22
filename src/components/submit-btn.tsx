"use client";

import { useFormStatus } from "react-dom";

type SubmitBtnProps = {
  db: "prisma" | "drizzle" | "kysely";
  children: React.ReactNode;
};

export const SubmitBtn = ({ db, children }: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      data-db={db}
      className="px-2 py-1 data-[db=prisma]:text-white transition rounded w-full disabled:opacity-50 data-[db=prisma]:bg-violet-500 data-[db=prisma]:hover:bg-violet-700 data-[db=drizzle]:bg-lime-500 data-[db=drizzle]:hover:bg-lime-700 data-[db=drizzle]:text-black font-semibold data-[db=kysely]:bg-sky-500 data-[db=kysely]:hover:bg-sky-700 data-[db=kysely]:text-white"
      type="submit"
    >
      {children}
    </button>
  );
};
