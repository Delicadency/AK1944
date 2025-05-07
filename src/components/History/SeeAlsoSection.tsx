import Container from "../shared/Container";
import Image from "next/image";
import { Heading } from "../shared/Heading/Heading";

interface SeeAlsoSectionProps {
  children: React.ReactNode;
}

export const SeeAlsoSection = ({ children }: SeeAlsoSectionProps) => (
  <section className="overflow-hidden bg-greenB pb-10 pt-6">
    <Container className="relative">
      <Image
        src="/images/history/main/stamp.webp"
        alt=""
        width={160}
        height={160}
        className="absolute -top-14 right-1 z-10 h-[160px] w-[160px] desktop:-right-20"
        aria-hidden="true"
      />
      <Heading variant="h4" color="white" contrast="black">
        Zobacz także
      </Heading>
      <div className="mt-5 flex flex-col desktop:flex-row desktop:gap-28">
        {children}
      </div>
    </Container>
  </section>
);
