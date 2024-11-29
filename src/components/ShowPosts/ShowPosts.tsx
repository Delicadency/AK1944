"use client";

import parse from "html-react-parser";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export const ShowPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Określamy typ stanu

  async function fetchData() {
    try {
      const res = await fetch("https://wordpressapi.eu/wp-json/wp/v2/posts/");
      const data: Post[] = await res.json(); // Użyj interfejsu Post
      setPosts(data);
    } catch (e) {
      console.log("Error!", e);
    } finally {
      console.log("The data was fetched correctly!");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 className="text-2xl">{post.title.rendered}</h2>
          <div className="text-lg">{parse(post.content.rendered)}</div>
        </div>
      ))}
    </>
  );
};
