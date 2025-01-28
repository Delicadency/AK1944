import { BASE_API_URL } from "@/utils/constans";

export const getImage = async (mediaId: string): Promise<string> => {
  const DEFAULT_IMAGE = "/images/news_placeholder.png";

  if (!mediaId) {
    return DEFAULT_IMAGE;
  }

  try {
    const response = await fetch(`${BASE_API_URL}/media/${mediaId}`);

    if (!response.ok) {
      return DEFAULT_IMAGE;
    }

    const data = await response.json();
    return data.source_url ?? DEFAULT_IMAGE;
  } catch {
    return DEFAULT_IMAGE;
  }
};
