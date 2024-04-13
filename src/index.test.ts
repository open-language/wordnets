import { test, expect } from "bun:test";
import wordnets from "./index";

test("Check wordnet path", () => {
  expect(wordnets.en_wordnet_3_0.home).toBe("https://wordnet.princeton.edu/");
  expect(wordnets.en_wordnet_3_0.path).toMatch(/data\/en-wordnet-3_0/);
});
