import { News } from "@/components/News";

export default function Home() {
  return (
    <main>
      <News url="https://wordpressapi.eu/wp-json/wp/v2/posts/" />
    </main>
  );
}
