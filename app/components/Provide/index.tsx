"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useWhatsApp } from "../../hooks/useWhatsApp";

const Provide = () => {
  const t = useTranslations("Services");
  const { openWhatsApp } = useWhatsApp();

  const serviceLines = [
    {
      imgSrc: "/assets/provide/marketing.svg",
      title: t("service_lines.political_campaigns.title"),
      desc: t("service_lines.political_campaigns.description"),
      features: t.raw("service_lines.political_campaigns.features"),
    },
    {
      imgSrc: "/assets/provide/graphic.svg",
      title: t("service_lines.governments_entities.title"),
      desc: t("service_lines.governments_entities.description"),
      features: t.raw("service_lines.governments_entities.features"),
    },
    {
      imgSrc: "/assets/provide/uidesign.svg",
      title: t("service_lines.companies_organizations.title"),
      desc: t("service_lines.companies_organizations.description"),
      features: t.raw("service_lines.companies_organizations.features"),
    },
    {
      imgSrc: "/assets/provide/heaking.svg",
      title: t("service_lines.training.title"),
      desc: t("service_lines.training.description"),
      features: t.raw("service_lines.training.features"),
    },
  ];

  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-semibold mb-6">
            {t("section_title")}
          </h2>
          <p className="text-lg text-bluegray max-w-4xl mx-auto">
            {t("section_intro")}
          </p>
        </div>

        {/* SERVICE LINES SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-semibold text-blue mb-4">
              {t("service_lines_title")}
            </h3>
          </div>
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
            {serviceLines.map((service, i) => (
              <div
                key={i}
                className="min-w-[240px] md:min-w-0 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col"
              >
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  width={56}
                  height={56}
                  className="mb-3"
                />
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  {service.title}
                </h4>
                <p className="text-base text-bluegray leading-snug mb-2">
                  {service.desc}
                </p>
                {Array.isArray(service.features) && (
                  <ul className="list-disc pl-4 text-bluegray text-sm">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CLIENTS SECTION */}
        <div className="mt-24">
          <h3 className="text-3xl lg:text-4xl font-semibold text-blue mb-10 text-center">{t("clients_title")}</h3>
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
            {[
              "political_campaigns",
              "governments_entities",
              "companies_organizations",
              "training"
            ].map((key, idx) => {
              const client = t.raw(`clients.${key}`);
              return (
                <div key={key} className="min-w-[240px] md:min-w-0 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex flex-col h-full">
                  <h4 className="text-lg font-semibold text-navyblue mb-1 text-center">{client.headline}</h4>
                  <p className="text-bluegray text-center mb-2 font-medium text-sm">{client.tagline}</p>
                  <ul className="list-disc pl-4 text-bluegray text-sm mb-1 flex-grow">
                    {client.services.map((srv: string, i: number) => (
                      <li key={i}>{srv}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-16">
          <button
            onClick={() => openWhatsApp("services")}
            className="inline-flex items-center gap-2 text-xl font-medium text-blue hover:text-blue-700 transition-colors bg-transparent border-none cursor-pointer"
          >
            {t("learnMore")} {" "}
            <Image
              src={"/assets/provide/arrow.svg"}
              alt={"arrow"}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Provide;
