import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './content/cases' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    year: z.number().optional(),
    context: z.string().optional(),
    role: z.string().optional(),
    team: z.string().optional(),
    tools: z.array(z.string()).default([]),
    summary: z.string().optional(),
    cover: z.string().optional(),
    images: z.array(z.string()).default([]),
    video: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { cases };
