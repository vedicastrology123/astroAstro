import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    url: z.string().url(),
    bio: z.string(),
  }),
});

const articleCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    information: z.string(),
    description: z.string(),
    type: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    keywords: z.array(z.string()).optional(),
    news_keywords: z.array(z.string()),
    path: z.array(z.string()),
    author: reference('authors')
  }),
});

export const collections = {
  articles: articleCollection,
  authors: authors
};