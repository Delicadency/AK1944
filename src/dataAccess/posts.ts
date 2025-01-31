import { z } from "zod";

import type { Post } from "@/types";
import { BASE_API_URL } from "@/utils/constants";

const postSchema = z.object({
  id: z.number(),
  date: z.string(),
  title: z.object({ rendered: z.string() }),
  content: z.object({ rendered: z.string() }),
  excerpt: z.object({ rendered: z.string() }),
  featured_media: z.number(),
});

const postsSchema = z.array(postSchema);

const mapPost = (post: z.infer<typeof postSchema>): Post => ({
  id: post.id,
  date: post.date,
  title: post.title.rendered,
  content: post.content.rendered,
  excerpt: post.excerpt.rendered,
  featured_media: post.featured_media,
});

export const getPosts = async (
  perPage: number,
): Promise<[Post[] | null, Error | null]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/posts?per_page=${perPage}`);
    if (!res.ok) {
      throw new Error("Could not fetch the data for that resource");
    }

    const jsonData = await res.json();
    const parsedData = postsSchema.safeParse(jsonData);
    if (!parsedData.success) {
      throw new Error("Invalid API response format");
    }

    const mappedPosts: Post[] = parsedData.data.map(mapPost);

    return [mappedPosts, null];
  } catch (error: unknown) {
    if (error instanceof Error) {
      return [null, error];
    }
    return [null, new Error("Wystąpił nieznany błąd.")];
  }
};
