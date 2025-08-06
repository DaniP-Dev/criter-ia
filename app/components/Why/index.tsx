"use client";
import Image from "next/image";
import "./Why.css";
import NewsletterPDF from "./NewsletterPDF";
import { useTranslations } from "next-intl";

const Why = () => {
  const t = useTranslations("Why");
  const items = t.raw("items");

  return (
    <div className="min-h-100 flex-col relative overflow-hidden container" style={{position: 'relative', overflow: 'hidden'}}>
      {/* Círculos animados de fondo */}
      <span className="circle small shade1"></span>
      <span className="circle medium shade2"></span>
      <span className="circle large shade3"></span>
      <span className="circle xlarge shade4"></span>
      <span className="circle xxlarge shade5"></span>
      {/* Contenido principal con z-index superior */}
      <div style={{position: 'relative', zIndex: 1}}>
        <div className="mt-12 mb-8">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight sm:leading-tight text-center text-gray-900">
            {t("title")}
          </h3>
          <h4 className="text-lg font-medium sm:leading-tight text-center text-white mx-auto">
            {t("subtitle")}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mx-10 md:mx-36 pb-5">
          <div className=" md:col-span-6">
            <NewsletterPDF />
          </div>
          <div className="mt-4 md:mt-0 md:col-span-5 ">
            <div className="text-lg font-normal sm:leading-tight text-black md:text-white mx-auto text-justify md:text-center md:pt-20">
              {t("context")}
              <br />
              <br />
              {t("instructionsForUse")}
            </div>
            <button
              type="button"
              className="text-15px mt-2 text-white md:text-[#3399FF] transition duration-150 ease-in-out hover:text-blue bg-[#3399FF] md:bg-white hover:bg-white font-medium py-5 px-16 border border-lightgrey leafbutton mx-auto block"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/pdf/Brochure_Criteria.pdf";
                link.download = "Boletin-Comunicacion-Digital-Colombia.pdf";
                link.click();
              }}
            >
              {t("ctaMoreInfo")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
