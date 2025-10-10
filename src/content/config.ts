import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articleCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    author: z.string(),
    information: z.string(),
    description: z.string(),
    type: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    keywords: z.array(z.string()).optional(),
    news_keywords: z.array(z.string()),
    path: z.array(z.string())
  }),
});

export const collections = {
  articles: articleCollection,
};