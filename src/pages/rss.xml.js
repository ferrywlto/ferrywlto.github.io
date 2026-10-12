import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPublishedPosts, getSortedByDateDesc, getTopPosts, getTopPublishedPostsOrderByDateDesc } from '../helpers';

export async function GET(context) {
    const [blogs, diaries, projects, whispers] = await Promise.all([
        getCollection('blogs'),
        getCollection('diaries'),
        getCollection('projects'),
        getCollection('whispers'),
    ]);

    const allItems = [
        ...getPublishedPosts(blogs).map((post) => ({
            ...post.data,
            link: `/blogs/${post.id}/`,
        })),
        ...getPublishedPosts(diaries).map((diary) => ({
            ...diary.data,
            link: `/diaries/${diary.id}/`,
        })),
        ...getPublishedPosts(projects).map((project) => ({
            ...project.data,
            link: `/projects/${project.id}/`,
        })),
        ...getPublishedPosts(whispers).map((whisper) => ({
            ...whisper.data,
            link: `/whispers/#${whisper.id}`,
        })),
    ]
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    .slice(0, 20);

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: allItems,
    });
}
