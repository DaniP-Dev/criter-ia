"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect } from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import CtaButton from "./CtaButton";
import { useTranslations } from "next-intl";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

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
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-12 w-40 object-contain lg:hidden"
                  src={"/imgs/bannerFW.png"}
                  alt="dsign-logo"
                />
                <img
                  className="hidden lg:block h-20 w-48 object-contain"
                  src={"/imgs/bannerFW.png"}
                  alt="dsign-logo"
                />
              </div>

              {/* LINKS */}

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-black hover:opacity-100"
                          : "hover:text-black hover:opacity-100",
                        "px-3 py-4 text-lg font-normal opacity-75 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}

            <CtaButton />

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
