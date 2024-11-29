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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);
        const res = await fetch(url);
        const result: Post[] = await res.json();
        setData(result);
      } catch (e) {
        console.log("Error fetching data", e);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, setIsPending, setData]);

  return { data, isPending };
};
