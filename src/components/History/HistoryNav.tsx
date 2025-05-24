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
    <IconArrowHorizontal className="z-[-10] hidden desktop:block" />
    <IconArrowVertical className="z-[-1] translate-x-10 desktop:hidden" />
    <ul className="flex flex-col gap-10 font-courier desktop:w-full desktop:-translate-x-10 desktop:-translate-y-10 desktop:flex-row desktop:justify-evenly desktop:gap-0 desktop:px-20">
      <li>
        <Link
          href={Routes.REGIMENT}
          className="inline-flex items-center gap-5 desktop:-translate-y-11 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-yellowVintage desktop:hidden" />
          <span>5.Pułk Strzelców Konnych</span>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-yellowVintage desktop:block" />
        </Link>
      </li>
      <li>
        <Link
          href={Routes.DEBICA_DISTRICT}
          className="inline-flex items-center gap-5 desktop:-translate-y-11 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC desktop:hidden" />
          <span>Obwód Dębica SZP-ZWZ-AK</span>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-greenC desktop:block" />
        </Link>
      </li>
      <li>
        <Link
          href={Routes.OPERATION}
          className="inline-flex items-center gap-5 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <span>Akcja „Burza”</span>
        </Link>
      </li>
      <li>
        <Link
          href={Routes.LITERATURE}
          className="inline-flex items-center gap-5 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <span>Literatura</span>
        </Link>
      </li>
      <li>
        <Link
          href={Routes.BIOGRAMS}
          className="inline-flex items-center gap-5 desktop:-translate-y-11 desktop:flex-col"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-greenC desktop:hidden" />
          <span>Biogramy</span>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-greenC desktop:block" />
        </Link>
      </li>
    </ul>
  </Container>
);
