const getUsers = `
    await prisma
        .users
        .findMany();
`;

const getUserById = `
    await prisma
        .users
            .findUnique({ 
                where: { id: userId } 
            });
`;

const getUsersWithPosts = `
    await prisma
        .users
        .findMany({ 
            include: { posts: true } 
        });
`;

const getUserByIdWithPosts = `
    await prisma
        .users
        .findUnique({ 
            where: { id: userId }, 
            include: { posts: true } 
        });
`;

const markdown = {
  getUsers,
  getUserById,
  getUsersWithPosts,
  getUserByIdWithPosts,
};

export default markdown;
