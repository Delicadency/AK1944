import { boardData } from "@/app/(client)/zwiazek/zarzad/data/boardData";
import LogoAK from "@/icons/LogoAK";
import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { ShowOnTabletAndUp } from "@/components/shared/ShowOnTabletAndUp";
import { ShowOnMobile } from "@/components/shared/ShowOnMobile";

export default function BoardPage() {
  return (
    <section className="flex flex-col justify-center contrast:bg-black00">
      <Container as="section" className="pt-5 tablet:pb-[64px] desktop:py-10">
        <Breadcrumbs contrastVariant="yellow" />
        <ShowOnMobile className="flex justify-center py-10">
          <LogoAK className="h-[64px] w-[176px]" />
        </ShowOnMobile>
      </Container>

      <Container
        as="article"
        className="font-16 h-fit w-full bg-greenMain py-6 leading-6 text-textLight desktop:flex desktop:min-h-[740px] desktop:w-[1022px] desktop:flex-col desktop:justify-center"
      >
        <ShowOnTabletAndUp className="mx-auto flex flex-col items-center pt-3">
          <LogoAK className="h-[100px] w-[275px]" />
          <div className="my-9 h-[1px] w-full" aria-hidden="true"></div>
        </ShowOnTabletAndUp>

        <article className="desktop:grid desktop:grid-cols-2">
          {boardData.members.map((section, index) => (
            <div key={index} className="tablet:px-[88px] desktop:pr-0">
              <h4 className="font-bold">{section.title}</h4>
              <ul className="pb-6">
                {section.names.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <p className="pb-6 tablet:px-[88px]">{boardData.note}</p>
      </Container>

      <Container
        as="section"
        className="font-16 flex flex-col gap-10 pb-10 pt-6 leading-6 tablet:px-6 tablet:pb-20 desktop:mx-auto desktop:w-[1022px] desktop:px-0 desktop:pb-150"
      >
        <p>{boardData.announcement}</p>
        <p>{boardData.electionInfo}</p>
      </Container>
    </section>
  );
}
