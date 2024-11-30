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

export const useFetchPosts = (url: string) => {
  const [isPending, setIsPending] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json: Post[] = await response.json();
        setPosts(json);
        setError(null);
      } catch (error) {
        setError(`${error} Nie udało się pobrać danych`);
      } finally {
        setIsPending(false);
      }
    };

    fetchPost();
  }, [url, setIsPending, setPosts]);

  return { posts, isPending, error };
};
