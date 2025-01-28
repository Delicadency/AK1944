import type { Post, PostResponse } from "@/types";
import { BASE_API_URL } from "@/utils/constans";

export const getPosts = async (
  perPage: number,
): Promise<[Post[] | null, Error | null]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/posts?per_page=${perPage}`);
    if (!res.ok) {
      throw new Error("Could not fetch the data for that resource");
    }

    const posts = (await res.json()) as PostResponse[];
    const mappedPosts: Post[] = posts.map((post) => ({
      id: post.id,
      date: post.date,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      featured_media: post.featured_media,
    }));

    return [mappedPosts, null];
  } catch (error: unknown) {
    if (error instanceof Error) {
      return [null, error];
    }
    return [null, new Error("Wystąpił nieznany błąd.")];
  }
};
