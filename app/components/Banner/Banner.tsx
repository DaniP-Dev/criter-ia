"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useWhatsApp } from "../../hooks/useWhatsApp";

const Banner = () => {
  const t = useTranslations("Banner");
  const { openWhatsApp } = useWhatsApp();
  return (
    <main>
      <div className="px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image ">
          <div className="max-h-screen">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                {t("title")}
              </h1>
              <img
                src="/imgs/logoFWMB.png"
                alt="Banner"
                className="mx-auto max-h-40 w-auto h-auto"
                style={{ maxHeight: "160px" }}
              />
              <p className="mt-6 text-lg leading-8 text-bluegray">
                {t("subtitle")}
              </p>
            </div>

            <div className="text-center mt-5">
              <button
                type="button"
                className="text-15px text-white font-medium bg-brandblue  py-5 px-9 mt-2 leafbutton"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/pdf/Brochure_Criteria.pdf";
                  link.download = "Brochure_Criteria.pdf";
                  link.click();
                }}
              >
                {t("ctaPortfolio")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
