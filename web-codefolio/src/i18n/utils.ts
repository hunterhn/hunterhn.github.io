import { defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "es" ? "es" : "en";
}

export function normalizePath(path: string): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `/${clean}` : "/";
}

function withTrailingSlash(path: string): string {
  return path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
}

export function localizePath(path: string, lang: Lang): string {
  const normalized = normalizePath(path);
  if (lang === defaultLang) return withTrailingSlash(normalized);
  const prefixed =
    normalized === "/" ? `/${lang}` : `/${lang}${normalized}`;
  return withTrailingSlash(prefixed);
}

export function switchLangPath(path: string, lang: Lang): string {
  const stripped = path.replace(/^\/(es|en)(?=\/|$)/, "") || "/";
  return localizePath(stripped, lang);
}
