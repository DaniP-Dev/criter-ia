import Image from "next/image";
import { useTranslations } from "next-intl";

const Clientsay = () => {
    const t = useTranslations("About");
    
    return (
        <div className="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl lg:text-6xl font-semibold text-navyblue mb-8">
                    {t("title")}
                </h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl lg:text-2xl font-normal text-darkgray leading-relaxed">
                        {t("description")}
                    </p>
                    <div className="mt-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-navyblue mb-1">{t("especialidad.title")}</h3>
                        <p className="text-base text-blue font-bold">{t("especialidad.desc")}</p>
                    </div>
                </div>
                
                {/* Elementos visuales decorativos */}
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6">
                        <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">📊</span>
                        </div>
                        <h3 className="text-lg font-semibold text-navyblue mb-2">{t("strategy.title")}</h3>
                        <p className="text-sm text-darkgray text-center">{t("strategy.desc")}</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-6">
                        <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">📈</span>
                        </div>
                        <h3 className="text-lg font-semibold text-navyblue mb-2">{t("data.title")}</h3>
                        <p className="text-sm text-darkgray text-center">{t("data.desc")}</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-6">
                        <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-2xl font-bold">🎯</span>
                        </div>
                        <h3 className="text-lg font-semibold text-navyblue mb-2">{t("experience.title")}</h3>
                        <p className="text-sm text-darkgray text-center">{t("experience.desc")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientsay;
