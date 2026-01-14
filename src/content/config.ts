import { defineCollection, z } from "astro:content";

const leetcode = defineCollection({
  type: "content",
  schema: z.object({
    order: z.number(), // order *within the category*
    title: z.string(),
    category: z.enum([
      "arrays",
      "dp",
      "graphs",
      "heaps",
      "review",
      "strings",
      "trees",])
  }),
});

export const collections = {
  leetcode,
};