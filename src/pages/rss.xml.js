import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
    const [blogs, diaries, projects, whispers] = await Promise.all([
        getCollection('blogs'),
        getCollection('diaries'),
        getCollection('projects'),
        getCollection('whispers'),
    ]);

    const allItems = [
        ...blogs.map((post) => ({
            ...post.data,
            link: `/blogs/${post.id}/`,
        })),
        ...diaries.map((diary) => ({
            ...diary.data,
            link: `/diaries/${diary.id}/`,
        })),
        ...projects.map((project) => ({
            ...project.data,
            link: `/projects/${project.id}/`,
        })),
        ...whispers.map((whisper) => ({
            ...whisper.data,
            link: `/whispers/#${whisper.id}`,
        })),
    ].sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: allItems,
    });
}
