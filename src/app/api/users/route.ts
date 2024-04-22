import drizzle from "@/lib/drizzle.db";

import { NextResponse } from "next/server";
import { users } from "../../../../drizzle/schema";
import { faker } from "@faker-js/faker";

const userFactory = () => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
});

const seedData: Array<Omit<typeof users.$inferSelect, "id">> = Array.from(
  { length: 10 },
  userFactory
);

export async function GET() {
  const currentUsers = await drizzle.select({ id: users.id }).from(users);

  if (currentUsers.length === 0) {
    console.log("seeding users");
    const data = await drizzle
      .insert(users)
      .values(seedData)
      .returning({ id: users.id });
    console.log(`seeded ${data.length} users`);
  }

  return NextResponse.json({ mssg: "GET /users" }, { status: 200 });
}
