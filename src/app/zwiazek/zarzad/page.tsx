import { boardData } from "@/data/boardData";
import LogoAK from "@/icons/LogoAK";
import Container from "@/components/shared/Container";

export default function BoardPage() {
  return (
    <section className="flex flex-col justify-center">
      <Container>
        <section className="pt-5 tablet:pb-[64px] desktop:py-10">
          {/* todo: replace to a proper Breadcrumbs component */}
          <h3 className="font-lora text-28 text-greenMain" aria-label="Ścieżka nawigacji">
            Breadbrumbs Placeholder
          </h3>
        </section>
        <div className="flex justify-center py-10 tablet:hidden">
          <LogoAK className="h-[64px] w-[176px]" aria-label="Logo AK" />
        </div>
      </Container>
      <div className="desktop:flex desktop:flex-col desktop:items-center desktop:justify-center">
        <article
          className="font-16 h-fit w-full bg-greenMain py-6 leading-6 text-backgroundMain desktop:min-h-[740px] desktop:w-[1022px]"
        >
          <Container>
            <div className="mobile:hidden tablet:block">
              <div className="flex flex-col items-center px-[88px] pt-3">
                <LogoAK className="h-[100px] w-[275px]" aria-label="Logo AK" />
                <hr className="my-9 w-full" aria-hidden="true"></hr>
              </div>
            </div>
            <div className="desktop:grid desktop:grid-cols-2">
              {boardData.data.map((section, index) => (
                <div key={index} className="tablet:px-[88px] desktop:pr-0">
                  <h4 className="font-bold" id={`section-${index}`}>
                    {section.subtitle}
                  </h4>
                  <ul className="pb-6">
                    {section.members.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="pb-6 tablet:px-[88px]">
              {boardData.note}
            </p>
          </Container>
        </article>
        <Container>
          <section
            className="font-16 flex flex-col gap-10 pb-10 pt-6 leading-6 text-black tablet:px-6 desktop:mx-auto desktop:w-[1022px] desktop:px-0 desktop:pb-[150px]"
          >
            <p>{boardData.announcement}</p>
            <p>{boardData.electionInfo}</p>
          </section>
        </Container>
      </div>
    </section>
  );
}
