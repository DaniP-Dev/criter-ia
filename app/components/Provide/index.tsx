"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Provide = () => {
  const t = useTranslations("Services");
  const [showAll, setShowAll] = useState(false);
  const services = [
    {
      imgSrc: "/assets/provide/marketing.svg",
      title: t("service1.title"),
      desc: t("service1.desc"),
    },
    {
      imgSrc: "/assets/provide/graphic.svg",
      title: t("service2.title"),
      desc: t("service2.desc"),
    },
    {
      imgSrc: "/assets/provide/uidesign.svg",
      title: t("service3.title"),
      desc: t("service3.desc"),
    },
    {
      imgSrc: "/assets/provide/marketing.svg",
      title: t("service4.title"),
      desc: t("service4.desc"),
    },
    {
      imgSrc: "/assets/provide/graphic.svg",
      title: t("service5.title"),
      desc: t("service5.desc"),
    },
    {
      imgSrc: "/assets/provide/uidesign.svg",
      title: t("service6.title"),
      desc: t("service6.desc"),
    },
    {
      imgSrc: "/assets/provide/marketing.svg",
      title: t("service7.title"),
      desc: t("service7.desc"),
    },
  ];
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                {t("title")}
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                {t("description")}
              </h4>
              <Link
                href={"/"}
                className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
              >
                {t("learnMore")}{" "}
                <Image
                  src={"/assets/provide/arrow.svg"}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {visibleServices.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.desc}
                  </h4>
                </div>
              ))}
            </div>
            {services.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  className="px-6 py-2 rounded-full bg-blue text-white font-semibold shadow hover:bg-blue-700 transition"
                  onClick={() => setShowAll((v) => !v)}
                >
                  {showAll ? t("showLess") : t("showMore")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
