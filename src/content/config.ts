import { defineCollection, z } from "astro:content";

const leetcode = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "arrays",
      "dp",
      "graphs",
      "heaps",
      "intervals",
      "linked-lists",
      "review",
      "matrices",
      "strings",
      "trees",]),
    number: z.number().optional(), // LeetCode problem number
    difficulty: z.enum(["Easy", "Medium", "Hard"]).optional(),
    order: z.number(),  // Order within the category
  }),
});

export const collections = {
  leetcode,
};