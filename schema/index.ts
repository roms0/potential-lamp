import { defineRelations } from "drizzle-orm";
import { cards } from "./cards";
import { tasks } from "./tasks";

export const schema = {
  cards,
  tasks,
};

export const relations = defineRelations(schema, (r) => ({
  cards: {},
  tasks: {},
}));
