import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { historyData } from "@/data/historyData";
import { useMediaQuery } from "@/hooks/useMediaQuery";
export const Expansion = () => {
  const {
    expansionTitle,
    expansion1,
    expansion2,
    expansion3,
    expansion4,
    expansion5,
    expansion6,
    expansion7,
  } = historyData.debica ?? {};

  const isDesktop = useMediaQuery("(min-width: 1280px)");
  // const isDesktop;

  return (
    <section className="mb-6 flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {expansionTitle}
      </Heading>
      <div className="flex flex-col gap-6 desktop:flex-row">
        {!isDesktop && (
          <Image
            src="/images/history/debica/officer-school.jpg"
            alt="debica"
            width={500}
            height={1080}
            className="m-auto"
          />
        )}
        <div>
          <div>
            <p className="text-lg contrast:text-yellowContrast">{expansion1}</p>
            <p className="text-lg contrast:text-yellowContrast">{expansion2}</p>
            <p className="text-lg contrast:text-yellowContrast">{expansion3}</p>
          </div>
          {!isDesktop && (
            <Image
              src="/images/history/debica/attention.jpg"
              alt="debica"
              width={500}
              height={1080}
              className="m-auto"
            />
          )}
          <div>
            <p className="mb-6 text-lg contrast:text-yellowContrast">
              {expansion4}
            </p>
            <p className="text-lg contrast:text-yellowContrast">{expansion5}</p>
            <p className="text-lg contrast:text-yellowContrast">{expansion6}</p>
            <p className="text-lg contrast:text-yellowContrast">{expansion7}</p>
          </div>
        </div>
        {isDesktop && (
          <div>
            <Image
              src="/images/history/debica/officer-school.jpg"
              alt="debica"
              width={500}
              height={1080}
              className="m-auto"
            />
            <Image
              src="/images/history/debica/attention.jpg"
              alt="debica"
              width={500}
              height={1080}
              className="m-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};
