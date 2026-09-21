// src/i18n/utils.ts
import { ui, defaultLang, showDefaultLang, languages, localeMeta, type SupportedLang } from './ui';

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Extracts language code from the current URL pathname.
 * E.g., /es/about -> 'es', /ja/ -> 'ja', /about -> 'en'
 */
export function getLangFromUrl(url: URL): SupportedLang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLang;
  }
  return defaultLang;
}

/**
 * Strips any supported language prefix from a pathname.
 * E.g., /es/about -> /about, /es -> /, / -> /
 */
export function getCleanPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  const clean = '/' + segments.join('/');
  return clean === '' ? '/' : clean;
}

/**
 * Translation helper for localized UI strings.
 */
export function useTranslations(lang: SupportedLang) {
  const localized = ui[lang] || ui[defaultLang];
  const fallback = ui[defaultLang];

  return function t(key: TranslationKey, fallbackText?: string): string {
    if (key in localized) {
      return (localized as Record<string, string>)[key];
    }
    if (key in fallback) {
      return (fallback as Record<string, string>)[key];
    }
    return fallbackText || key;
  };
}

/**
 * Generates translated path links respecting showDefaultLang: false.
 */
export function useTranslatedPath(currentLang: SupportedLang) {
  return function translatePath(path: string, targetLang: SupportedLang = currentLang): string {
    const cleanPath = getCleanPath(path);
    if (!showDefaultLang && targetLang === defaultLang) {
      return cleanPath;
    }
    return `/${targetLang}${cleanPath === '/' ? '/' : cleanPath}`;
  };
}

export interface HreflangItem {
  hreflang: string;
  href: string;
}

/**
 * Returns full list of alternate hreflang entries for SEO including x-default.
 */
export function getHreflangList(pathname: string, siteUrl = 'https://freevirtualruler.com'): HreflangItem[] {
  const cleanPath = getCleanPath(pathname);
  const normalizedClean = cleanPath === '/' ? '/' : cleanPath;

  const list: HreflangItem[] = [];

  // Add all 8 supported languages
  (Object.keys(languages) as SupportedLang[]).forEach((lang) => {
    let href: string;
    if (lang === defaultLang) {
      href = `${siteUrl}${normalizedClean}`;
    } else {
      href = `${siteUrl}/${lang}${normalizedClean === '/' ? '/' : normalizedClean}`;
    }
    list.push({
      hreflang: lang,
      href,
    });
  });

  // Add x-default pointing to English default
  list.push({
    hreflang: 'x-default',
    href: `${siteUrl}${normalizedClean}`,
  });

  return list;
}

/**
 * Retrieves Open Graph locale and language attributes.
 */
export function getLocaleMeta(lang: SupportedLang) {
  return localeMeta[lang] || localeMeta[defaultLang];
}
