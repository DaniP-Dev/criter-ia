"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === "es" ? "en" : "es";

  // Quita el primer segmento (el locale) del pathname
  const segments = pathname.split("/");
  // ['', 'es', ...] o ['', 'en', ...]
  const pathWithoutLocale = "/" + segments.slice(2).join("/");

  return (
    <Link href={pathWithoutLocale === "/" ? "/" : pathWithoutLocale} locale={nextLocale}>
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-blue bg-lightblue text-blue font-medium shadow-sm hover:bg-blue hover:text-white transition-colors duration-150"
        title={nextLocale === "es" ? "Cambiar a Español" : "Switch to English"}
      >
        <img
          src={nextLocale === "es" ? "/imgs/flagEs.png" : "/imgs/flagEn.png"}
          alt={nextLocale === "es" ? "Español" : "English"}
          className="w-6 h-6"
        />
        <span className="inline">
          {nextLocale === "es" ? "ES" : "EN"}
        </span>
      </button>
    </Link>
  );
}
