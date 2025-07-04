import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface NavigationItem {
  name: string;
  href?: string;
  sectionId?: string;
  current: boolean;
}

interface DataProps {
  onNavClick: (item: NavigationItem) => void;
}

const Data = ({ onNavClick }: DataProps) => {
  const t = useTranslations("Navbar");
  const navigation: NavigationItem[] = [
    { name: t("home"), sectionId: "inicio", current: true },
    { name: t("about"), sectionId: "compradores", current: false },
    { name: t("portfolio"), sectionId: "servicios", current: false },
    { name: t("newsletter"), sectionId: "porque", current: false },
    { name: t("interactiveMap"), sectionId: "mapa", current: false },
    { name: t("contact"), sectionId: "contacto", current: false },
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
              <button
                key={item.name}
                onClick={() => onNavClick(item)}
                className={classNames(
                  item.current
                    ? "text-black hover:opacity-100"
                    : "hover:text-black hover:opacity-100",
                  "px-2 py-1 text-lg font-normal opacity-75 block bg-transparent border-none cursor-pointer w-full text-left"
                )}
              >
                {item.name}
              </button>
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
