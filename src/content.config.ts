import { glob } from 'astro/loaders';
import { defineCollection, z, type SchemaContext } from 'astro:content';

// Content base path
const CONTENT_BASE_PATH = './src/content';

const buildDraftSchema = () => z.object({
  draft: z.boolean().optional()
});

const buildPublishingSchema = () => buildDraftSchema()
  .merge(z.object({
    pubDate: z.coerce.date(),
  }));

// Shared schema components
const buildPostContentSchema = (ctx: SchemaContext) => buildPublishingSchema()
  .merge(z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.union([ctx.image(), z.string().url()]).optional(),
    tags: z.array(z.string()),
  }));

// Content collections
const whispers = defineCollection({
  loader: glob({ base: `${CONTENT_BASE_PATH}/whispers`, pattern: '**/*.{md,mdx}' }),
  schema: () => buildPublishingSchema()
    .merge(z.object({
      author: z.string()
    })),
});

const blogs = defineCollection({
  loader: glob({ base: `${CONTENT_BASE_PATH}/blogs`, pattern: '**/*.{md,mdx}' }),
  schema: buildPostContentSchema,
});

const diaries = defineCollection({
  loader: glob({ base: `${CONTENT_BASE_PATH}/diaries`, pattern: '**/*.{md,mdx}' }),
  schema: buildPostContentSchema,
});

const projects = defineCollection({
  loader: glob({ base: `${CONTENT_BASE_PATH}/projects`, pattern: '**/*.{md,mdx}' }),
  schema: (ctx: SchemaContext) => buildPostContentSchema(ctx)
  .merge(z.object({
    projectUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    heroImage: z.union([ctx.image(), z.string().url()]).optional(),
  })),
});

export const collections = { blogs, whispers, diaries, projects };
