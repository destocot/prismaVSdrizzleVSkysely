import { relations } from "drizzle-orm";
import { pgTable, text, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("users_email_key").on(table.email),
    };
  }
);

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id),
});

/* drizzle level relations */
export const usersRelations = relations(users, ({ many }) => {
  return {
    posts: many(posts),
  };
});

export const postsRelations = relations(posts, ({ one }) => {
  return {
    author: one(users, {
      fields: [posts.authorId],
      references: [users.id],
    }),
  };
});
