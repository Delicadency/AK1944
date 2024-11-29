"use client";

import { useFetchData } from "@/hooks/useFetchData";
import parse from "html-react-parser";

export const ShowPosts = () => {
  const { data: posts, isPending } = useFetchData(
    "https://wordpressapi.eu/wp-json/wp/v2/posts/",
  );

  return (
    <>
      {isPending ? (
        <div>Wczytuje dane...</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-2xl">{post.title.rendered}</h2>
            <div className="text-lg">{parse(post.content.rendered)}</div>
          </div>
        ))
      )}
    </>
  );
};
