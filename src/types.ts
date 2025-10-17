import type { InferEntrySchema, RenderedContent } from "astro:content";

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
};
export type ContentPost = {
  data: BlogPost | DiaryPost | ProjectPost;
};

export type TaggableCollection = 'blogs' | 'diaries' | 'projects';
