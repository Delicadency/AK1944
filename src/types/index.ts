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
export interface IconProps {
  className?: string;
  name: IconName;
}
