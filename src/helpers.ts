import type { ContentPost, PostPreview, WhisperPost } from "./types";

type PublishablePost = ContentPost | WhisperPost;

export function getPublishedPosts<T extends PublishablePost>(posts: T[]) {
  return posts.filter((post) => post.data.draft !== true);
}

export function getSortedByDateDesc<T extends PublishablePost>(posts: T[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export function getTopPosts<T extends PublishablePost>(posts: T[], size: number) {
  if (size === -1) return posts;
  return posts.slice(0, size);
}

export function getTopPublishedPostsOrderByDateDesc<T extends PublishablePost>(posts: T[], size: number = -1) {
  const publishedPosts = getPublishedPosts(posts);
  const sortedPosts = getSortedByDateDesc(publishedPosts);
  return getTopPosts(sortedPosts, size);
}

export function getUniqueTagsFromPosts(posts: ContentPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags ?? []))]
}
