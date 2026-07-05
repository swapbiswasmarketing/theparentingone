import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    stage: z.enum(["little", "middle", "big", "all"]).default("all"),
    readingTime: z.string().optional(),
    emoji: z.string().default("🌱"),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
