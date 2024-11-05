import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        slug: z.string().optional(),
        image: image(),
        tags: z.array(z.string()).default([]),
        code: z.string().url().optional(),
        link: z.string().url().optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
};