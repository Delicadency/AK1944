import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export const useFetchData = (url: string) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json: Post[] = await response.json();
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Nie udało się pobrać danych`);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, setIsPending, setData]);

  return { data, isPending, error };
};
