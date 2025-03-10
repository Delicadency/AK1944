import { ElementType, ReactNode } from "react";

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

export interface PlaceDetails {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  link: string;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export interface NavItem {
  href: string;
  label: string;
}
