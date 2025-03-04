import IconBullet from "@/icons/IconBullet";

interface UnionListItemProps {
  text: string;
}

export default function UnionListItem({ text }: UnionListItemProps) {
  return (
    <li className="flex flex-row gap-6 pb-5">
      <IconBullet
        className="flex-shrink-0 text-redMain contrast:text-yellowContrast"
        aria-hidden="true"
      />
      <p>{text}</p>
    </li>
  );
}
