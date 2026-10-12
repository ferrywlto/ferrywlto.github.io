import type { PostPreview } from "./types";

function getPublishedPosts(posts: PostPreview[]) {
  return posts.filter((post) => post.data.draft !== true);
}

function getTopByDateReversed(posts: PostPreview[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export function getTopPosts(posts: PostPreview[], size: number = -1) {
  const publishedPosts = getPublishedPosts(posts);
  const sortedPosts = getTopByDateReversed(publishedPosts);
  if (size === -1) return sortedPosts;
  return sortedPosts.slice(0, size);
}
