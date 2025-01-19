export interface PostResponse {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

export interface Post {
  id: number;
  date: string;
  title: string;
  content: string;
  excerpt: string;
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
