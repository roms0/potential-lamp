import {
  boolean,
  jsonb,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export type CardPayload = {
  telegram: string[];
  description: string | null;
};

export const softCards = pgTable("soft_cards", {
  id: varchar()
    .primaryKey()
    .notNull()
    .$defaultFn(() => ulid()),
  website: varchar().notNull(),
  createdAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  title: varchar().notNull().unique(),
  label: varchar().notNull(),
  isClosed: boolean().notNull().default(false),
  payload: jsonb()
    .$type<CardPayload>()
    .notNull()
    .default({ description: null, telegram: [] }),
});
