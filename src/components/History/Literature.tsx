import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import { Button } from "../shared/Button/Button";
import { Routes } from "@/routes";

const { title, content } = historyData.history.literature;

export const LiteratureComponent = () => (
  <Container className="mt-10 flex flex-col bg-greenMain py-6 contrast:bg-yellowContrast desktop:mt-0 desktop:max-w-[420px]">
    <Heading variant="h3" contrast="black" color="white">
      {title}
    </Heading>
    <p className="my-6 font-courier text-lg text-white contrast:text-black00 desktop:text-base">
      {content}
    </p>
    <Button
      variant="primaryBlue"
      label="Sprawdź"
      ariaDescription="Sprawdź"
      className="m-auto mb-6"
      href={Routes.LITERATURE}
    />
  </Container>
);
