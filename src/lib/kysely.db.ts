import { NeonDialect } from "kysely-neon";
import { Kysely } from "kysely";
import ws from "ws";
import { Database } from "../../kysely/schema";

const connectionString = `${process.env.DATABASE_URL}`;

const kyselyClientSingleton = () => {
  return new Kysely<Database>({
    dialect: new NeonDialect({
      connectionString: connectionString,
      webSocketConstructor: ws,
    }),
  });
};

declare global {
  var kyselyGlobal: undefined | ReturnType<typeof kyselyClientSingleton>;
}

const kysely = globalThis.kyselyGlobal ?? kyselyClientSingleton();

export default kysely;

if (process.env.NODE_ENV !== "production") globalThis.kyselyGlobal = kysely;
