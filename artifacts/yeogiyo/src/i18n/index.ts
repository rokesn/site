import en from "./locales/en.json";
import ko from "./locales/ko.json";
import zh from "./locales/zh.json";
import zhTw from "./locales/zh-tw.json";
import ja from "./locales/ja.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";
import it from "./locales/it.json";
import ar from "./locales/ar.json";
import nl from "./locales/nl.json";
import sv from "./locales/sv.json";
import no from "./locales/no.json";

export type Locale = typeof en;

export const locales: Record<string, Locale> = {
  en,
  ko,
  zh,
  "zh-tw": zhTw,
  ja,
  de,
  fr,
  es,
  pt,
  it,
  ar,
  nl,
  sv,
  no,
};

export const localeNames: Record<string, string> = {
  en: "English",
  ko: "한국어",
  zh: "中文 (简体)",
  "zh-tw": "中文 (繁體)",
  ja: "日本語",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  pt: "Português",
  it: "Italiano",
  ar: "العربية",
  nl: "Nederlands",
  sv: "Svenska",
  no: "Norsk",
};

export const localePaths: Record<string, string> = {
  en: "/",
  ko: "/ko/",
  zh: "/zh/",
  "zh-tw": "/zh-tw/",
  ja: "/ja/",
  de: "/de/",
  fr: "/fr/",
  es: "/es/",
  pt: "/pt/",
  it: "/it/",
  ar: "/ar/",
  nl: "/nl/",
  sv: "/sv/",
  no: "/no/",
};

export const ogLocales: Record<string, string> = {
  en: "en_US",
  ko: "ko_KR",
  zh: "zh_CN",
  "zh-tw": "zh_TW",
  ja: "ja_JP",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  pt: "pt_BR",
  it: "it_IT",
  ar: "ar_SA",
  nl: "nl_NL",
  sv: "sv_SE",
  no: "nb_NO",
};

export function getT(locale: string): Locale {
  return locales[locale] ?? locales.en;
}
