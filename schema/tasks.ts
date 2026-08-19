import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export const TASK_STATUS = {
  scheduled: "scheduled",
  done: "done",
  failed: "failed",
  in_progress: "in_progress",
} as const;

export const TASK_ACTOR = {
  harvester: "harvester",
  researcher: "researcher",
} as const;

export const tasks = pgTable("tasks", {
  id: varchar()
    .primaryKey()
    .notNull()
    .$defaultFn(() => ulid()),
  label: varchar().notNull(),
  actor: varchar().notNull(),
  createdAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  scheduledAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  startedAt: timestamp({ withTimezone: true, precision: 0 }).notNull(),
  finishedAt: timestamp({ withTimezone: true, precision: 0 }).notNull(),
  business: varchar().notNull(),
  status: varchar().notNull(),
  error: varchar(),
});
