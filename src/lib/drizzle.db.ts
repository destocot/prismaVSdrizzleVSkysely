import { Pool } from "@neondatabase/serverless";
import { drizzle as DrizzleClient } from "drizzle-orm/neon-serverless";
import * as schema from "../../drizzle/schema";

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });

const drizzleClientSingleton = () => {
  return DrizzleClient(pool, {
    schema,
    // logger: true
  });
};

declare global {
  var drizzleGlobal: undefined | ReturnType<typeof drizzleClientSingleton>;
}

const drizzle = globalThis.drizzleGlobal ?? drizzleClientSingleton();

export default drizzle;

if (process.env.NODE_ENV !== "production") globalThis.drizzleGlobal = drizzle;
