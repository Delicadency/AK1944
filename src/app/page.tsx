import NewsLanding from "@/components/NewsLanding/NewsLanding";
import AboutUsLanding from "@/components/AboutUsLanding/AboutUsLanding";
import Hero from "@/components/Hero/Hero";
import { BecomeDonor } from "@/components/BecomeDonor";


export default function Home() {
  return (
    <main>
      <Hero />
      <NewsLanding />
      <AboutUsLanding />
      <BecomeDonor />
    </main>
  );
}
