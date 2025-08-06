import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface methodCardType {
    imgSrc: string;
    heading: string;
    description: string;
}

const About = () => {
    const t = useTranslations("Method");

    const methodData: methodCardType[] = [
        {
            imgSrc: '/assets/buyers/diagnostico.png',
            heading: t('diagnostico.heading'),
            description: t('diagnostico.description'),
        },
        {
            imgSrc: '/assets/buyers/estrategia.png',
            heading: t('estrategia.heading'),
            description: t('estrategia.description'),
        },
        {
            imgSrc: '/assets/buyers/evaluacion.png',
            heading: t('produccion.heading'),
            description: t('produccion.description'),
        },
        {
            imgSrc: '/assets/buyers/produccion.png',
            heading: t('evaluacion.heading'),
            description: t('evaluacion.description'),
        }
    ];

    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            {/* HEADER SECTION */}
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-6xl font-semibold mb-6">
                    {t("title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {t("subtitle")}
                </p>
            </div>

            {/* CARDS SECTION */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {methodData.map((item, i) => (
                    <div className="flex flex-col justify-start items-stretch min-h-[370px] bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow" key={i}>
                        <div className="flex justify-center border border-blue border-opacity-20 p-3 w-20 h-20 rounded-lg bg-blue bg-opacity-10 mx-auto mb-6">
                            <Image src={item.imgSrc} alt={item.heading} width={48} height={48} />
                        </div>
                        <h3 className="text-xl text-navyblue font-semibold text-center mb-4">{item.heading}</h3>
                        <p className="text-base font-normal text-gray-600 text-center leading-relaxed flex-grow">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
