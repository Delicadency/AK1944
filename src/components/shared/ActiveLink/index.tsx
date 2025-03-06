"use client";

import { type UrlObject } from "url";
import { type Route } from "next";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

interface Props<T extends string> extends LinkProps<T> {
  href: Route<T> | UrlObject;
  children?: React.ReactNode;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  title?: string;
}

export const ActiveLink = <T extends string>({
  href,
  children,
  exact = true,
  className,
  activeClassName = "font-bold text-yellowVintage",
  title,
  ...rest
}: Props<T>) => {
  const pathname = usePathname();

  const isHrefObject = typeof href === "object";
  const url = isHrefObject ? href.pathname : href;
  const query = isHrefObject ? href.query : {};
  const isActive = exact ? pathname === url : pathname.includes(url!);

  return (
    <Link
      href={{
        pathname: url,
        query,
      }}
      aria-current={isActive ? "page" : undefined}
      title={title}
      className={cn(
        "text-white transition duration-300 ease-in-out hover:text-yellowVintage contrast:text-black00",
        className,
        isActive && activeClassName,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
