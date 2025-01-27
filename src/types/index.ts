export interface PostResponse {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export type IconName =
  | "award"
  | "check"
  | "coffee"
  | "compass"
  | "file"
  | "gift"
  | "help"
  | "info"
  | "pin"
  | "send"
  | "target";

export interface IconProps extends DefaultIconProps {
  name: IconName;
}

export interface DefaultIconProps {
  className?: string;
}
export interface SubmenuItem {
  href: string;
  label: string;
}
