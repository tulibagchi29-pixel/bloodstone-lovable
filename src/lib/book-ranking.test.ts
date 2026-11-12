import { test } from "node:test";
import { deepStrictEqual } from "node:assert";
import { latestBookRanking } from "./book-ranking";

test("10 October 2026 announcement records Bloodstone at #13 in bestsellers", () => {
  deepStrictEqual(latestBookRanking, {
    rank: 13,
    date: "10 October 2026",
    category: "Hard Science Fiction Bestsellers",
    market: "Amazon India",
  });
});