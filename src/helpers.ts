import type { ContentPost, PostPreview, WhisperPost } from "./types";

type PublishablePost = ContentPost | WhisperPost;

export function getPublishedPosts<T extends PublishablePost>(posts: T[]) {
  return posts.filter((post) => post.data.draft !== true);
}

function getTopByDateReversed<T extends PublishablePost>(posts: T[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export function getTopPublishedPostsOrderByDateDesc<T extends PublishablePost>(posts: T[], size: number = -1) {
  const publishedPosts = getPublishedPosts(posts);
  const sortedPosts = getTopByDateReversed(publishedPosts);
  if (size === -1) return sortedPosts;
  return sortedPosts.slice(0, size);
}

export function getUniqueTagsFromPosts(posts: ContentPost[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags ?? []))]
}
