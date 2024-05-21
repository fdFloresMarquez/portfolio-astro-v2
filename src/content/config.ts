import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    experience: z.array(
      z.object({
        date: z.string(),
        title: z.string(),
        company: z.string(),
        description: z.string(),
        link: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  experience: experienceCollection,
};
