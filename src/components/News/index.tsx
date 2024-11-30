import parse from "html-react-parser";
import { getPosts } from "@/dataAccess/posts";

interface NewsProps {
  url: string;
}

export const News = async ({ url }: NewsProps) => {
  const posts = await getPosts(url);

  if (!posts || posts.length === 0) {
    return <p>Brak danych</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 className="text-2xl">{post.title}</h2>
          <div className="text-lg">{parse(post.content)}</div>
        </div>
      ))}
    </>
  );
};
