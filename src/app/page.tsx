import NewsLanding from "@/components/NewsLanding/NewsLanding";
import AboutUsLanding from "@/components/AboutUsLanding/AboutUsLanding";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NewsLanding />
      <AboutUsLanding />
    </main>
  );
}
