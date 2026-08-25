import { writeCSV } from "bun-excel";
import { client } from "../schema/client";
import { schema } from "../schema";
import randomName from "@scaleway/random-name";
import { inArray } from "drizzle-orm";

type DataItem = typeof schema.softCards.$inferSelect;

async function unseen() {
  const items = await client.query.softCards.findMany({
    where: {
      batchName: {
        isNull: true,
      },
    },
  });

  const batch = randomName("file");

  const config: { id: string; map: (item: DataItem) => string }[] = [
    { id: "title", map: (item: DataItem) => item.title },
    { id: "website", map: (item: DataItem) => item.website },
    {
      id: "description",
      map: (item: DataItem) => item.payload.description ?? "",
    },
    {
      id: "telegrams",
      map: (item: DataItem) => item.payload.telegram.toString(),
    },
  ];
  try {
    client.transaction(async (trs) => {
      await trs
        .update(schema.softCards)
        .set({ batchName: batch })
        .where(
          inArray(
            schema.softCards.id,
            items.map((item) => item.id),
          ),
        );
      await writeCSV(`${batch}.csv`, [
        config.map((item) => item.id),
        ...items.map((item) => config.map((key) => key.map(item))),
      ]);
    });
    console.log(`file ${batch} created with ${items.length} items`);
  } catch {
    console.error(`error`);
  }
}

await unseen();
