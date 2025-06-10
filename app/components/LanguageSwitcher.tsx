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
      <button>
        Cambiar a {nextLocale === "es" ? "Español" : "English"}
      </button>
    </Link>
  );
}
