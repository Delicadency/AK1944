export const getImage = async (url: string): Promise<string | null> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Could not fetch the data for that resource");
  }

  const image = await res.json();

  return image.source_url || null;
};
