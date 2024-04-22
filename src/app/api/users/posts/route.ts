import drizzle from "@/lib/drizzle.db";
import { posts, users } from "../../../../../drizzle/schema";
import { faker } from "@faker-js/faker";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

const postFactory = () => ({
  title: faker.lorem.words(3),
  content: faker.lorem.paragraphs(2),
});

const createSeedData = () => {
  const seedData: Array<Omit<typeof posts.$inferSelect, "id" | "authorId">> =
    Array.from({ length: 10 }, postFactory);
  return seedData;
};

export async function GET() {
  const currentUsersWithPosts = await drizzle
    .select({ id: users.id, posts: { id: posts.id } })
    .from(users)
    .fullJoin(posts, eq(users.id, posts.authorId));

  console.log(currentUsersWithPosts);
  //   for (const user of currentUsersWithPosts) {
  //     if (user.posts === null) {
  //       const seedData = createSeedData();
  //       const seedDataWithAuthorId = seedData.map((post) => ({
  //         ...post,
  //         authorId: user.id,
  //       }));
  //       const data = await drizzle
  //         .insert(posts)
  //         .values(seedDataWithAuthorId)
  //         .returning({ id: posts.id });
  //       console.log(`seeded ${data.length} posts for user ${user.id}`);
  //     }
  //   }

  return NextResponse.json({ mssg: "GET /users/posts" });
}
