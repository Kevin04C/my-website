import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created: z.string(),
    categories: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
