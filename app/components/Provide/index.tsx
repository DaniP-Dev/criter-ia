"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Provide = () => {
  const t = useTranslations("Services");
  
  const politicalServices = [
    {
      imgSrc: "/assets/provide/marketing.svg",
      title: t("political1.title"),
      desc: t("political1.desc"),
    },
    {
      imgSrc: "/assets/provide/graphic.svg",
      title: t("political2.title"),
      desc: t("political2.desc"),
    },
  ];

  const businessServices = [
    {
      imgSrc: "/assets/provide/uidesign.svg",
      title: t("business1.title"),
      desc: t("business1.desc"),
    },
    {
      imgSrc: "/assets/provide/heaking.svg",
      title: t("business2.title"),
      desc: t("business2.desc"),
    },
  ];

  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-bluegray max-w-4xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* POLITICAL LINE */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-semibold text-blue mb-4">
              🔷 {t("politicalLine.title")}
            </h3>
            <p className="text-lg text-bluegray">
              {t("politicalLine.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {politicalServices.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="mb-6"
                />
                <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h4>
                <p className="text-lg text-bluegray leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BUSINESS LINE */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-semibold text-blue mb-4">
              🔷 {t("businessLine.title")}
            </h3>
            <p className="text-lg text-bluegray">
              {t("businessLine.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessServices.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="mb-6"
                />
                <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                  {service.title}
                </h4>
                <p className="text-lg text-bluegray leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center">
          <Link
            href={"/"}
            className="inline-flex items-center gap-2 text-xl font-medium text-blue hover:text-blue-700 transition-colors"
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
    </div>
  );
};

export default Provide;
