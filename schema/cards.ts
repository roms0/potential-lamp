import {
  boolean,
  jsonb,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { ulid } from "ulid";

type Payload = {
  telegram: { value: string; description: string }[];
  websites: { value: string; description: string }[];
  description: string;
};

export const cards = pgTable("cards", {
  id: varchar()
    .primaryKey()
    .notNull()
    .$defaultFn(() => ulid()),
  createdAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  title: varchar().notNull(),
  group: varchar().notNull(),
  business: varchar().notNull(),
  isClosed: boolean().notNull().default(false),
  payload: jsonb().$type<Payload>(),
});
