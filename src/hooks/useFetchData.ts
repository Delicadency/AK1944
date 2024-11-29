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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const result: Post[] = await res.json();
        setData(result);
      } catch (e) {
        console.log("Error fetching data", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, setIsLoading, setData]);

  return { data, isLoading };
};
