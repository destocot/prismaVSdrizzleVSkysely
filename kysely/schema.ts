import { Insertable, Selectable } from "kysely";
import { posts, users } from "../drizzle/schema";

export type Database = {
  users: UsersTable;
  posts: PostsTable;
};

export type UsersTable = typeof users.$inferSelect;

export type User = Selectable<UsersTable>;
export type NewUser = Insertable<UsersTable>;
export type UserUpdate = Insertable<UsersTable>;

export type PostsTable = Omit<typeof posts.$inferSelect, "authorId"> & {
  author_id: string;
};

export type Post = Selectable<PostsTable>;
export type NewPost = Insertable<PostsTable>;
export type PostUpdate = Insertable<PostsTable>;
