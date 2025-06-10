import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface aboutCardType {
    imgSrc: string;
    heading: string;
    description: string;
}

const About = () => {
    const t = useTranslations("About");

    const aboutData: aboutCardType[] = [
        {
            imgSrc: '/assets/about/mission.svg',
            heading: t('mission.heading'),
            description: t('mission.description'),
        },
        {
            imgSrc: '/assets/about/vision.svg',
            heading: t('vision.heading'),
            description: t('vision.description'),
        },
        {
            imgSrc: '/assets/about/values.svg',
            heading: t('values.heading'),
            description: t('values.description'),
        },
        {
            imgSrc: '/assets/about/team.svg',
            heading: t('team.heading'),
            description: t('team.description'),
        }
    ];

    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {aboutData.map((item, i) => (
                    <div className="flex flex-col justify-start items-stretch min-h-[370px] bg-white rounded-lg shadow p-4" key={i}>
                        <div className="flex justify-center border border-border p-2 w-16 h-16 rounded-lg bg-white mx-auto">
                            <Image src={item.imgSrc} alt={item.heading} width={48} height={48} />
                        </div>
                        <h3 className="text-2xl text-black font-semibold text-center mt-5">{item.heading}</h3>
                        <p className="text-lg font-normal text-black text-center text-opacity-70 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
