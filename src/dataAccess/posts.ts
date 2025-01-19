import type { Post, PostResponse } from "@/types";

export const getPosts = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Could not fetch the data for that resource");
  }

  const posts = (await res.json()) as PostResponse[];

  return posts.map(
    (post) =>
      ({
        id: post.id,
        date: post.date,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
      }) as Post,
  );
};
