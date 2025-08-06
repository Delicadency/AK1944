type MapProps = {
  map: {
    iframeUrl: string;
    externalUrl: string;
  };
};

const disableScroll = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style = "";
};

export const Map = ({ map }: MapProps) => {
  return (
    <section className="pb-12 pt-6 desktop:pb-20 desktop:pt-10">
      <iframe
        className="h-[50vh] w-full desktop:h-[816px]"
        src={map.iframeUrl}
        loading="lazy"
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
        onLoad={() => window.scrollTo(0, 0)}
      ></iframe>
      <div className="w-full py-1">
        <a
          className="text-12 text-grayDate"
          href={map.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zobacz trasę w Traseo
        </a>
      </div>
    </section>
  );
};
