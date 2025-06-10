import Image from "next/image";
import NewsletterPDF from "./NewsletterPDF";
import { useTranslations } from "next-intl";

const Why = () => {
  const t = useTranslations("Why");
  const items = t.raw("items");

  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="lg:-ml-64">
            <NewsletterPDF />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-bold tracking-tight sm:leading-tight mt-5 text-center lg:text-start text-gray-900">
              {t("title")}
            </h3>
            <h4 className="text-lg pt-4 font-medium sm:leading-tight text-center text-beach lg:text-start max-w-2xl mx-auto lg:mx-0">
              {t("subtitle")}
            </h4>

            <div className="mt-10">
              {items.map((item: any, i: number) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src="/assets/why/check.svg"
                      alt={t("checkAlt")}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold text-gray-900">
                      {item.heading}
                    </h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {item.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
