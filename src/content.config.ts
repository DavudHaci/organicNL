import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gidsen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gidsen' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    keyword: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Betalen', 'Bonussen', 'Spellen', 'Regelgeving', 'Praktisch']),
    readingTime: z.number(),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
  }),
});

export const collections = { gidsen };
