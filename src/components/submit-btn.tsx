"use client";

import { useMdStore } from "@/lib/store";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

type SubmitBtnProps = {
  db: "prisma" | "drizzle" | "kysely";
  children: React.ReactNode;
  globalPending: boolean;
};

export const SubmitBtn = ({ db, children, globalPending }: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  const setPending = useMdStore((state) => state.isPending);

  useEffect(() => {
    setPending(pending);
  }, [pending, setPending]);

  return (
    <button
      disabled={pending || globalPending}
      data-db={db}
      className="px-2 py-1 data-[db=prisma]:text-white transition rounded w-full disabled:opacity-50 data-[db=prisma]:bg-violet-500 data-[db=prisma]:hover:bg-violet-700 data-[db=drizzle]:bg-lime-500 data-[db=drizzle]:hover:bg-lime-700 data-[db=drizzle]:text-black font-semibold data-[db=kysely]:bg-sky-500 data-[db=kysely]:hover:bg-sky-700 data-[db=kysely]:text-white"
      type="submit"
    >
      {children}
    </button>
  );
};
