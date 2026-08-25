import { drizzle, type NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { relations, schema } from ".";

export const client = drizzle(process.env.DATABASE!, {
  schema: schema,
  casing: "snake_case",
  relations: relations,
});
