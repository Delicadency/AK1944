import { z } from "zod";

import type { Post } from "@/types";
import { fetchData } from "@/utils/fetchData";
import { BASE_API_URL } from "@/utils/constants";

const postSchema = z.object({
  id: z.number(),
  date: z.string(),
  title: z.object({ rendered: z.string() }),
  content: z.object({ rendered: z.string() }),
  excerpt: z.object({ rendered: z.string() }),
  featured_media: z.number(),
});

const mapPost = (post: z.infer<typeof postSchema>): Post => ({
  id: post.id,
  date: post.date,
  title: post.title.rendered,
  content: post.content.rendered,
  excerpt: post.excerpt.rendered,
  featured_media: post.featured_media,
});

export const getCalendarPost = async (): Promise<
  [Post | null, Error | null]
> => {
  const { data, error } = await fetchData(`${BASE_API_URL}/pages/347`);

  if (error instanceof Error) {
    console.error("Fetch error:", error);
    return [null, error];
  }

  const parsedData = postSchema.safeParse(data);
  if (!parsedData.success) {
    console.error("Parsing error:", parsedData.error);
    return [null, new Error("Invalid API response format")];
  }

  const mappedPost: Post = mapPost(parsedData.data);
  return [mappedPost, null];
};
