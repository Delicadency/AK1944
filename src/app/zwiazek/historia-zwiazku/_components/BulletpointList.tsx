import IconBullet from "@/icons/IconBullet";

interface BulletpointListProps {
  text: string;
}

export const BulletpointList = ({ text }: BulletpointListProps) => (
  <li className="flex flex-row gap-6 pb-5">
    <IconBullet
      className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
      aria-hidden="true"
    />
    <p>{text}</p>
  </li>
);
