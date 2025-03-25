"use client"
import dynamic from 'next/dynamic';

const LazyIframe = dynamic(() => import('./LazyIFrame').then((mod) => mod.LazyIframe), { ssr: false });

export const Map = () => {
  return (
    <>
      <LazyIframe />
      <div style={{ padding: '5px 0', width: '100%' }}>
        <a
          style={{ fontSize: '11px', color: '#888', opacity: 0.7 }}
          href="https://dawne.traseo.pl/trasa/szlak-partyzantow-ii-zgrupowania-ak-obwodu-debica"
        >
          Zobacz trasę w Traseo
        </a>
      </div>
    </>
  );
};
