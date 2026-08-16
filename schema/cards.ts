import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export const BUSINESS = {
  esim_provider: "esim_provider",
  vpn_provider: "vpn_provider",
  online_courses_trading: "online_courses_trading",
  create_ai_video: "create_ai_video",
  edit_photo: "edit_photo",
} as const;

export const cards = pgTable("cards", {
  id: varchar()
    .primaryKey()
    .notNull()
    .$defaultFn(() => ulid()),
  createdAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  title: varchar().notNull(),
  title_norm: varchar().notNull(),
  fingerprint: varchar().notNull(),
  business: varchar().notNull(),
  status: varchar().notNull(),
  /**
   * analytical
   */
  telegram: varchar(),
  description: varchar(),
  website: varchar(),
});

export const CARD_STATUS = {
  draft: "draft",
  close: "close",
  check: "check",
  taken: "taken",
} as const;
