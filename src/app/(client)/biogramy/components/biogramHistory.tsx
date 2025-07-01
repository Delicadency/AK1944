import { Button } from "@/components/shared/Button/Button";
import { BiogramHistory } from "./biogramTemplate";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { BiogramHistoryProps } from "../models/biogram";
import MorePeopleBiograms from "./moreBiograms";

export const BiogramHistoryPage = ({ biogram }: BiogramHistoryProps) => {
  return (
    <div className="pb-20">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-14 tablet:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          {biogram.title}
        </Heading>
        <BiogramHistory biogram={biogram} />
        <Button
          variant="primary"
          label="Znajdź grób"
          ariaDescription="Znajdź grób"
          className="m-auto mt-6"
          href={"/inwentarz-grobow"}
          disabled
        />
        <MorePeopleBiograms />
      </Container>
    </div>
  );
};
