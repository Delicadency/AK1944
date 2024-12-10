import parse from "html-react-parser";
import { getPosts } from "@/dataAccess/posts";

interface NewsProps {
  url: string;
}

export const News = async ({ url }: NewsProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const posts = await getPosts(url);

    if (!posts || posts.length === 0) {
      return <p>Brak danych</p>;
    }

    return (
      <>
        {posts.map((post) => (
          <div className="bg-greenMain text-black" key={post.id}>
            <h2 className="text-2xl">{post.title}</h2>
            <div className="text-lg">{parse(post.content)}</div>
          </div>
        ))}
      </>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return <p>Wystąpił błąd podczas ładowania danych. {error.message}</p>;
    } else {
      return <p>Wystąpił nieznany błąd.</p>;
    }
  }
};
