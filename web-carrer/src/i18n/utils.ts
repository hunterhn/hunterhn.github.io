import { defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "en" ? "en" : "es";
}

export function normalizePath(path: string): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `/${clean}` : "/";
}

export function localizePath(path: string, lang: Lang): string {
  const normalized = normalizePath(path);
  if (lang === defaultLang) return normalized;
  return normalized === "/" ? "/en" : `/en${normalized}`;
}

export function switchLangPath(path: string, lang: Lang): string {
  const stripped = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return localizePath(stripped, lang);
}
