import { BackgroundImage } from "@/components/shared/BackgroundImage/BackgroundImage";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { BiogramHistoryProps } from "../models/biogram";

export const BiogramHistory = ({ biogram }: BiogramHistoryProps) => {
  const biogramData = [
    { label: "Data i miejsce urodzenia:", value: biogram.birthDate },
    { label: "Data i miejsce śmierci:", value: biogram.deathDate },
    { label: "Miejsce pochówku:", value: biogram.burialPlace },
  ];

  return (
    <>
      <BackgroundImage
        alt=""
        src="/images/history/main/paper_bg.webp"
        width="768"
        height="948"
        className="absolute object-fill"
        aria-hidden="true"
      >
        <div className="mx-auto w-full max-w-[767px] px-6 py-12 contrast:bg-yellowContrast mobile:pt-28 tablet:max-w-[1279px] tablet:pt-0 desktop:max-w-[1440px] desktop:px-18 desktop:py-18">
          <Heading variant="h2" contrast="black" color="green">
            {biogram.title}
          </Heading>
          <Heading className="h4" contrast="black" color="green">
            ps. {biogram.pseudonym.map((p: string) => `"${p}"`).join(", ")}
          </Heading>

          <div className="flex flex-col desktop:flex-row">
            <div className="relative order-1 mx-auto aspect-[0.79] h-[400px] w-full max-w-[600px] tablet:h-[600px] desktop:order-2 desktop:h-[600px] desktop:max-w-[600px]">
              <Image
                src={biogram.imageUrl}
                alt={"Zdjęcie weterana Armii Krajowej"}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="rounded object-cover desktop:ml-10"
              />

              <Image
                src="/images/biogramy/znaczek.png"
                alt="Pieczątka"
                width={160}
                height={160}
                className="pointer-events-none absolute bottom-[-20px] right-[240px] h-[90px] w-[90px] select-none desktop:bottom-[-60px] desktop:right-[430px] desktop:h-[160px] desktop:w-[160px]"
              />

              <Image
                src="/images/biogramy/paski.png"
                alt="Pasek"
                width={250}
                height={20}
                className="pointer-events-none absolute right-3 top-4 h-[40px] w-[150px] select-none desktop:right-[20px] desktop:top-[-20px] desktop:h-[50px] desktop:w-[250px]"
              />
            </div>

            <div className="order-2 flex w-full flex-col desktop:order-1 desktop:w-5/6">
              <div className="pt-5 font-courier text-18">
                {biogramData.map((item, index) => (
                  <p key={index}>
                    <span>{item.label}&nbsp;</span>
                    <span className="font-bold">{item.value}</span>
                  </p>
                ))}
              </div>

              <div>
                {biogram.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="my-6 font-courier text-18 text-greenMain"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};
