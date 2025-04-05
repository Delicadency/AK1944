import Container from "../shared/Container";
import IconArrowVertical from "@/icons/IconArrowVertical";
import IconArrowHorizontal from "@/icons/IconArrowHorizontal";
import { Routes } from "@/routes";
import Link from "next/link";

export const HistoryNav = () => {
  return (
    <Container
      as="nav"
      className="flex justify-center desktop:mt-10 desktop:flex-col desktop:items-center"
    >
      <IconArrowHorizontal className="z-[-10] hidden desktop:block" />
      <IconArrowVertical className="z-[-1] translate-x-10 desktop:hidden" />
      <ul className="mb-[60px] flex flex-col gap-10 font-courier desktop:w-full desktop:-translate-x-10 desktop:-translate-y-10 desktop:flex-row desktop:justify-evenly desktop:gap-0 desktop:px-20">
        <li className="flex items-center gap-5 desktop:-translate-y-11 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-yellowVintage desktop:hidden" />
          <Link href={Routes.REGIMENT}>5.Pułk Strzelców Konnych</Link>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-yellowVintage desktop:block" />
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <Link href={Routes.OPERATION}>Akcja „Burza”</Link>
        </li>
        <li className="flex items-center gap-5 desktop:-translate-y-11 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC desktop:hidden" />
          <Link href={Routes.DEBICA_DISTRICT}>Obwód Dębica SZP-ZWZ-AK</Link>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-greenC desktop:block" />
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <Link href={Routes.LITERATURE}>Literatura</Link>
        </li>
        <li className="flex items-center gap-5 desktop:-translate-y-11 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC desktop:hidden" />
          <Link href={Routes.BIOGRAMS}>Biogramy</Link>
          <div className="hidden h-[50px] w-[50px] rounded-full bg-greenC desktop:block" />
        </li>
      </ul>
    </Container>
  );
};
