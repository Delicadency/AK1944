export interface PostResponse {
  id: string;
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
  featured_media: string;
}

export interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  excerpt: string;
  featured_media: string;
}

export interface ImageResponse {
  source_url: string;
  title: {
    rendered: string;
  };
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
