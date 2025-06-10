import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const Data = () => {
  const t = useTranslations("Navbar");
  const navigation: NavigationItem[] = [
    { name: t("home"), href: "/", current: true },
    { name: t("about"), href: "#about", current: false },
    { name: t("portfolio"), href: "/", current: false },
    { name: t("newsletter"), href: "#services", current: false },
    { name: t("interactiveMap"), href: "#project", current: false },
    { name: t("contact"), href: "#contact", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-black hover:opacity-100"
                    : "hover:text-black hover:opacity-100",
                  "px-2 py-1 text-lg font-normal opacity-75 block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <button className="bg-lightblue w-full hover:bg-blue hover:text-white text-blue font-medium my-2 py-2 px-4 rounded">
              Descarga el Boletín
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
