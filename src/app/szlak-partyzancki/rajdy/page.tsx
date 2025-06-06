import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Button } from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Suspense } from "react";
import React from "react";
import { RallyList } from "./_components/RallyList";
import { mainText } from "./data/rallyTextData";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default function RalliesPage({ searchParams }: PageProps) {
  const params = React.use(searchParams);
  const page = parseInt(params.page || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h3" color="green" contrast="yellow">
          Rajdy
        </Heading>
        <p className="py-3">
          {mainText}
        </p>
        <Button
          label="Zapisz się na rajd"
          href={""}
          ariaDescription="Zapisz się na rajd"
          variant="primaryBlue"
        />
        <Suspense fallback={<p>Ładowanie listy rajdów...</p>}>
          <RallyList currentPage={currentPage} />
        </Suspense>
      </Container>
    </div>
  );
}
