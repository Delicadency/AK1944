import { IconBullet } from "@/icons/IconBullet";

interface Props {
  points: string[];
}

export const BulletList = ({ points }: Props) => (
  <article className="space-y-6">
    <p>Oferujemy różne formy współpracy, takie jak</p>

    <ul className="flex flex-col justify-center gap-6">
      {points.map((point) => (
        <li key={point} className="flex items-center gap-4">
          <IconBullet
            className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
            aria-hidden="true"
          />

          <p className="font-sourceSans text-20 font-bold">{point}</p>
        </li>
      ))}
    </ul>
  </article>
);
