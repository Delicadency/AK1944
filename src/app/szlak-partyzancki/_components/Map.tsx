type MapProps = {
  map: {
    iframeUrl: string;
    externalUrl: string;
  };
};

export const Map = ({ map }: MapProps) => {
  return (
    <section className="pb-12 pt-6 desktop:pb-20 desktop:pt-10">
      <iframe
        className="h-[50vh] w-full desktop:h-[816px]"
        src={map.iframeUrl}
        loading="lazy"
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
