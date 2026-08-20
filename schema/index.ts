import { defineRelations } from "drizzle-orm";
import { cards } from "./cards";
import { tasks } from "./tasks";
import { softCards } from "./soft-cards";

export const schema = {
  cards,
  tasks,
  softCards,
};

export const relations = defineRelations(schema, (r) => ({
  cards: {},
  softCards: {},
  tasks: {},
}));
