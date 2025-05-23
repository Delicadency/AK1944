import { IconBullet } from "@/icons/IconBullet";

interface Props {
  bulletpoints: string[];
}

export const BulletpointList = ({ bulletpoints }: Props) => (
  <ul>
    {bulletpoints.map((text, i) => (
      <li className="flex flex-row gap-6 pb-5" key={i}>
        <IconBullet
          className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
          aria-hidden="true"
        />
        <p>{text}</p>
      </li>
    ))}
  </ul>
);
