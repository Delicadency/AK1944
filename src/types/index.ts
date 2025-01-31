export interface Post {
  id: number;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  featured_media: number;
}

export interface Image {
  source_url: string;
  title: string;
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
