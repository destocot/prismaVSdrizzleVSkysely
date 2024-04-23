const getUsers = `
  await drizzle
    .select()
    .from(users);
  `;

const getUserById = `
  await drizzle
    .select()
    .from(users)
    .where(eq(users.id, id));
  `;

const getUsersWithPosts = `
  await drizzle
    .select()
    .from(users)
    .leftJoin(posts, eq(users.id, posts.authorId));
  `;

const getUserByIdWithPosts = `
  await drizzle
    .select()
    .from(users)
    .where(eq(users.id, id))
    .leftJoin(posts, eq(users.id, posts.authorId));
  `;

const markdown = {
  getUsers,
  getUserById,
  getUsersWithPosts,
  getUserByIdWithPosts,
};

export default markdown;
