import { en } from "./locales/en";
import { es } from "./locales/es";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en,
  es,
} as const;
