import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export const executions = pgTable("executions", {
  id: varchar()
    .primaryKey()
    .notNull()
    .$defaultFn(() => ulid()),
  createdAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  business: varchar().notNull(),
});
