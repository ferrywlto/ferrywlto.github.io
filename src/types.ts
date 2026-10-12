import type { InferEntrySchema, RenderedContent } from "astro:content";
import type { CollectionEntry } from 'astro:content';

export interface Post {
    title: string,
    date: string,
    subtitle: string,
    link: string
}
export interface PostPreview {
  id: string,
  collection: string,
  data: {
    title: string;
    description: string;
    pubDate: Date;
    heroImage?: string | ImageMetadata;
    tags?: string[];
    draft?: boolean
  }
}
export interface BlogPost {
    id: string;
    body?: string;
    collection: "blogs";
    data: InferEntrySchema<"blogs">;
    rendered?: RenderedContent;
    filePath?: string;
}
export interface DiaryPost {
    id: string;
    body?: string;
    collection: "diaries";
    data: InferEntrySchema<"diaries">;
    rendered?: RenderedContent;
    filePath?: string;
}
export interface ProjectPost {
    id: string;
    body?: string;
    collection: "projects";
    data: InferEntrySchema<"projects">;
    rendered?: RenderedContent;
    filePath?: string;
}
export type WhisperPost = CollectionEntry<'whispers'>;

export type ContentPost = BlogPost | DiaryPost | ProjectPost;

export type TaggableCollection = 'blogs' | 'diaries' | 'projects';

export type ContentPath =
{
  params: {
    collection: TaggableCollection;
    slug: string;
  };
  props: {
    post: ContentPost;
  };
}

export type ContentPathWithTag =
{
  params: {
    collection: TaggableCollection;
    tag: string;
  };
  props: {
    posts: ContentPost[];
  };
}
