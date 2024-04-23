const getUsers = `
    await kysely
        .selectFrom("users")
        .selectAll()
        .execute();
`;

const getUserById = `
    await kysely
        .selectFrom("users")
        .where("id", "=", id)
        .selectAll()
        .executeTakeFirst();
`;

const getUsersWithPosts = `
    await kysely
        .selectFrom("users")
        .innerJoin("posts", "users.id", "posts.author_id")
        .selectAll()
        .execute();
`;

const getUserByIdWithPosts = `
    await kysely
        .selectFrom("users")
        .where("users.id", "=", id)
        .innerJoin("posts", "users.id", "posts.author_id")
        .selectAll()
        .execute();
`;

const markdown = {
  getUsers,
  getUserById,
  getUsersWithPosts,
  getUserByIdWithPosts,
};

export default markdown;
