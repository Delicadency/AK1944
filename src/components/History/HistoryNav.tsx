"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Container from "../shared/Container";
import IconArrowVertical from "@/icons/IconArrowVertical";
import IconArrowHorizontal from "@/icons/IconArrowHorizontal";

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
          <a href="#">5.Pułk Strzelców Konnych</a>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Akcja Burza</a>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Obwód Dębica SZP-ZWZ-AK</a>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Literatura</a>
        </li>
        <li className="flex items-center gap-5 desktop:flex-col">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Biogramy</a>
        </li>
      </ul>
    </Container>
  );
}
