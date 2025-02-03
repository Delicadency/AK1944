import NewsLanding from "@/components/NewsLanding/NewsLanding";
import AboutUsLanding from "@/components/AboutUsLanding/AboutUsLanding";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
    <main>
      <Hero />
      <NewsLanding />
      <AboutUsLanding />
    </main>
  );
}
