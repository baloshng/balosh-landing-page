export const SITE_NAME = "Balosh Integrated Services";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://balosh.com";

export const DEFAULT_TITLE = "Balosh Integrated Services | Access Control & Security Solutions";
export const DEFAULT_DESCRIPTION =
  "Balosh Integrated Services delivers integrated access control, parking, and security mobility solutions across commercial, public, residential, and transport environments.";

export const DEFAULT_OG_IMAGE = "/assets/img/all-images/balosh-solutions/Access-Control_3.jpg";

export function absoluteUrl(pathname: string = "/") {
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) {
    return pathname;
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
