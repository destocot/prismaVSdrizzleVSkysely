import { DrizzleCards } from "@/components/drizzle-cards";
import { KyselyCards } from "@/components/kysely-cards";
import { PrismaCards } from "@/components/prisma-cards";

const userId = "c320fd3b-01a5-4c5b-86a0-c98e6a6e78be";

export default function Home() {
  return (
    <main>
      <PrismaCards userId={userId} />
      <DrizzleCards userId={userId} />
      <KyselyCards userId={userId} />
    </main>
  );
}
