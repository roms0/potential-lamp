import { defineRelations } from "drizzle-orm";
import { softCards } from "./soft-cards";

export const schema = {
  softCards,
};

export const relations = defineRelations(schema, () => ({
  softCards: {},
}));
