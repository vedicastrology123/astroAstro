import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    author: z.string(),
    information: z.string(),
    lead: z.string(),
    lastmod: z.date(),
    description: z.string(),
    type: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    keywords: z.array(z.string()),
    news_keywords: z.array(z.string()),
    path: z.string()
  }),
});

export const collections = {
  'blog': blogCollection,
};