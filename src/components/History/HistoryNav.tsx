import Container from "../shared/Container";
import IconArrowVertical from "@/icons/IconArrowVertical";

export default function HistoryNav() {
  return (
    <Container as="nav" className="flex justify-center">
      <IconArrowVertical className="z-[-1] translate-x-10" />
      <ul className="flex flex-col gap-10">
        <li className="flex items-center gap-5">
          <div className="h-[50px] w-[50px] rounded-full bg-yellowVintage" />
          <a href="#">5.Pułk Strzelców Konnych</a>
        </li>
        <li className="flex items-center gap-5">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Akcja Burza</a>
        </li>
        <li className="flex items-center gap-5">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Obwód Dębica SZP-ZWZ-AK</a>
        </li>
        <li className="flex items-center gap-5">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Literatura</a>
        </li>
        <li className="mb-[60px] flex items-center gap-5">
          <div className="h-[50px] w-[50px] rounded-full bg-greenC" />
          <a href="#">Biogramy</a>
        </li>
      </ul>
    </Container>
  );
}
