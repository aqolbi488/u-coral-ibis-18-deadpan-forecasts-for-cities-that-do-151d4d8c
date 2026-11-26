import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Bellmarsh, 19° with steady drizzle through Friday, and the river is expected to remain 40 centimetres above the bridge deck.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
