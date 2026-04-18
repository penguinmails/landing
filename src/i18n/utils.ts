import { ui, defaultLang, showDefaultLang } from "./ui";
import type { TranslationKey } from "./types";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t<K extends TranslationKey>(key: K) {
    return (ui[lang][key] || ui[defaultLang][key]) as typeof ui[typeof defaultLang][K];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
