import { z } from "zod";

import { BASE_API_URL, DEFAULT_IMAGE } from "@/utils/constans";

const imageSchema = z.object({
  source_url: z.string().url(),
});

export const getImage = async (mediaId: string): Promise<string> => {
  if (!mediaId) {
    return DEFAULT_IMAGE;
  }

  try {
    const response = await fetch(`${BASE_API_URL}/media/${mediaId}`);

    if (!response.ok) {
      return DEFAULT_IMAGE;
    }

    const data = await response.json();
    const parsedData = imageSchema.safeParse(data);
    return parsedData.success ? parsedData.data.source_url : DEFAULT_IMAGE;
  } catch {
    return DEFAULT_IMAGE;
  }
};
