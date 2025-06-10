import { useTranslations } from "next-intl";
import Image from "next/image";

const Banner = () => {
  const t = useTranslations("Banner");
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              {t("subtitle")}
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
            >
              {t("ctaPortfolio")}
            </button>
            
          </div>

          <Image
            src={"/imgs/4Grid.png"}
            alt="banner-image"
            width={1200}
            height={598}
            className="pt-5"
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
