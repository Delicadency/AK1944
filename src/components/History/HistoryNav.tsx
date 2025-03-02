"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Container from "../shared/Container";
import IconArrowVertical from "@/icons/IconArrowVertical";
import IconArrowHorizontal from "@/icons/IconArrowHorizontal";
import { Routes } from "@/routes";
import Link from "next/link";

export default function HistoryNav() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <Container
      as="nav"
      className="flex justify-center desktop:flex-col desktop:items-center"
    >
      {isMobile ? (
        <IconArrowVertical className="z-[-1] translate-x-10" />
      ) : (
        <IconArrowHorizontal className="z-[-1]" />
      )}
      <ul className="mb-[60px] flex -translate-y-10 flex-col gap-10 desktop:w-full desktop:flex-row desktop:justify-evenly desktop:gap-0 desktop:px-20">
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-yellowVintage" />
          <Link href={Routes.REGIMENT}>5.Pułk Strzelców Konnych</Link>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <Link href={Routes.OPERATION}>Akcja „Burza”</Link>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <Link href={Routes.DEBICA_DISTRICT}>Obwód Dębica SZP-ZWZ-AK</Link>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <Link href={Routes.LITERATURE}>Literatura</Link>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <Link href={Routes.BIOGRAMS}>Biogramy</Link>
        </li>
      </ul>
    </Container>
  );
}
