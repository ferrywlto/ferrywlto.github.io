import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
	// Load Markdown and MDX files in the `src/content/blogs/` directory.
	loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string())
	}),
});

const quotes = defineCollection({
	// Load Markdown files in the `src/content/tweets/` directory.
	loader: glob({ base: './src/content/quotes', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		// Transform string to Date object
		pubDate: z.coerce.date(),
    author: z.string()
	}),
});

const diaries = defineCollection({
	// Load Markdown files in the `src/content/diaries/` directory.
	loader: glob({ base: './src/content/diaries', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string())
	}),
});

const projects = defineCollection({
	// Load Markdown files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		projectUrl: z.string().url().optional(),
		repoUrl: z.string().url().optional(),
	}),
});

export const collections = { blogs, quotes, diaries, projects };
