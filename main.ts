import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My AI agent writes code like a toddler packs a suitcase: everything goes in, I carry it, then it asks for a bigger context window.";
const outputDirectory = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(`${outputDirectory}/entry.txt`, roast, "utf8");
