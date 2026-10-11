import { defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "en" ? "en" : "es";
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
  const base =
    lang === defaultLang
      ? normalized
      : normalized === "/"
        ? "/en"
        : `/en${normalized}`;
  return withTrailingSlash(base);
}

export function switchLangPath(path: string, lang: Lang): string {
  const stripped = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return localizePath(stripped, lang);
}
