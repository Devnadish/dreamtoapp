import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "../i18n.config";

export function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales; // Supported locales from your i18n config
  const languages = new Negotiator({
    headers: negotiatorHeaders,
  }).languages();

  // Match the locale, defaulting to 'ar' if no match is found
  const locale = matchLocale(languages, locales, "ar");

  // If the matched locale is not in the supported locales, fallback to 'ar'
  const finalLocale = locales.includes(locale) ? locale : "ar";

  return finalLocale;
}

// import { match as matchLocale } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';
// import { i18n } from '../i18n.config';
// export function getLocale(request) {
//     const negotiatorHeaders = {};
//     request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
//     const locales = i18n.locales;
//     const languages = new Negotiator({
//         headers: negotiatorHeaders,
//     }).languages();
//     const locale = matchLocale(languages, locales, i18n.defaultLocale);
//     return locale;
// }
