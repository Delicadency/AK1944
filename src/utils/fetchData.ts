export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    return { data: null, error };
  }
};
