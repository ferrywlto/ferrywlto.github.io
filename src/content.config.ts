import { glob } from 'astro/loaders';
import { defineCollection, z, type SchemaContext } from 'astro:content';

// Content base path
const CONTENT_BASE_PATH = './src/content';

// Shared schema components
const baseContentSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()),
});


const projectLinksSchema = (ctx: SchemaContext) => z.object({
	projectUrl: z.string().url().optional(),
	repoUrl: z.string().url().optional(),
  heroImage: ctx.image().optional(),
});

// Content collections
const whispers = defineCollection({
	loader: glob({ base: `${CONTENT_BASE_PATH}/whispers`, pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		pubDate: z.coerce.date(),
		author: z.string()
	}),
});

const blogs = defineCollection({
	loader: glob({ base: `${CONTENT_BASE_PATH}/blogs`, pattern: '**/*.{md,mdx}' }),
	schema: baseContentSchema,
});

const diaries = defineCollection({
	loader: glob({ base: `${CONTENT_BASE_PATH}/diaries`, pattern: '**/*.{md,mdx}' }),
	schema: baseContentSchema,
});

const projects = defineCollection({
	loader: glob({ base: `${CONTENT_BASE_PATH}/projects`, pattern: '**/*.{md,mdx}' }),
	schema: (ctx: SchemaContext) => baseContentSchema.merge(projectLinksSchema(ctx)),
});

export const collections = { blogs, whispers, diaries, projects };
