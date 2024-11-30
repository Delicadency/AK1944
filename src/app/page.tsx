import { Suspense } from "react";
import { News } from "@/components/News";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Wczytuje dane...</div>}>
        <News url="https://wordpressapi.eu/wp-json/wp/v2/posts/" />
      </Suspense>
    </main>
  );
}
