"use client";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import parse from "html-react-parser";

interface NewsProps {
  url: string;
}

export const News: React.FC<NewsProps> = ({ url }) => {
  const { posts, isPending, error } = useFetchPosts(url);

  return (
    <>
      {isPending && <div>Wczytuje dane....</div>}
      {error && <div>{error}</div>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-2xl">{post.title.rendered}</h2>
            <div className="text-lg">{parse(post.content.rendered)}</div>
          </div>
        ))}
    </>
  );
};
