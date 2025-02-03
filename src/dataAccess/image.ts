import { z } from "zod";
import { fetchData } from "@/utils/fetchData";
import { BASE_API_URL, DEFAULT_IMAGE } from "@/utils/constants";

const imageSchema = z.object({
  source_url: z.string().url(),
});

export const getImage = async (mediaId: number): Promise<string> => {
  if (!mediaId) return DEFAULT_IMAGE;

  const data = await fetchData(`${BASE_API_URL}/media/${mediaId}`);
  const url = data?.data?.source_url;

  const parsedData = imageSchema.safeParse({ source_url: url });
  return parsedData.success ? parsedData.data.source_url : DEFAULT_IMAGE;
};
