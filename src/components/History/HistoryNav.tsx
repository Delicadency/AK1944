import Container from "../shared/Container";
import IconArrowVertical from "@/icons/IconArrowVertical";
import IconArrowHorizontal from "@/icons/IconArrowHorizontal";
import { Routes } from "@/routes";
import Link from "next/link";

export const HistoryNav = () => (
  <Container
    as="nav"
    className="flex justify-center desktop:mt-20 desktop:flex-col desktop:items-center"
  >
    <IconArrowHorizontal className="z-[1] hidden desktop:block" />
    <IconArrowVertical className="z-[1] translate-x-10 desktop:hidden" />
    <ul className="z-[2] flex flex-col gap-10 font-courier desktop:w-full desktop:-translate-x-10 desktop:-translate-y-10 desktop:flex-row desktop:justify-evenly desktop:gap-0 desktop:px-32">
      <li>
        <Link
          href={Routes.REGIMENT}
          className="inline-flex items-center gap-5 desktop:w-[300px] desktop:-translate-y-11 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-yellowVintage contrast:bg-blue desktop:hidden" />
          <span>5.Pułk Strzelców Konnych</span>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-yellowVintage contrast:bg-blue desktop:block" />
        </Link>
      </li>
      <li>
        <Link
          href={Routes.DEBICA_DISTRICT}
          className="inline-flex items-center gap-5 desktop:w-[300px] desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC contrast:bg-yellowContrast" />
          <span>Obwód Dębica SZP-ZWZ-AK</span>
        </Link>
      </li>
      <li>
        <Link
          href={Routes.OPERATION}
          className="inline-flex items-center gap-5 desktop:w-[200px] desktop:-translate-y-11 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC contrast:bg-yellowContrast desktop:hidden" />
          <span>Akcja „Burza”</span>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-greenC contrast:bg-yellowContrast desktop:block" />
        </Link>
      </li>
      <li>
        <Link
          href={Routes.LITERATURE}
          className="inline-flex items-center gap-5 desktop:w-[200px] desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC contrast:bg-yellowContrast" />
          <span>Literatura</span>
        </Link>
      </li>
      <li>
        <Link
          href={Routes.BIOGRAMS}
          className="inline-flex items-center gap-5 desktop:w-[200px] desktop:-translate-y-11 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC contrast:bg-yellowContrast desktop:hidden" />
          <span>Biogramy</span>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-greenC contrast:bg-yellowContrast desktop:block" />
        </Link>
      </li>
    </ul>
  </Container>
);
