'use client';

import { useTranslation } from '@/i18n/LanguageContext';
import type { Locale } from '@/i18n/translations';

const languages: { code: Locale; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-gray-200 bg-white/80 px-1 py-0.5 backdrop-blur-sm">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-label={`Switch language to ${label}`}
          className={`rounded-full px-2.5 py-1 text-xs font-medium tracking-wide transition-all duration-200 ${
            locale === code
              ? 'bg-[#0a1628] text-white shadow-sm'
              : 'text-gray-500 hover:text-[#0a1628]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
