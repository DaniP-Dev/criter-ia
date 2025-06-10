"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const Footer = () => {
    const t = useTranslations("Footer");
    const products: ProductType[] = [
        {
            id: 1,
            link: [t("home"), t("popular"), t("about"), t("contact")],
        },
        {
            id: 2,
            link: [t("help"), t("resources"), t("application"), t("team")],
        }
    ];

    return (
        <div className="bg-darkblue -mt-40">
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className='col-span-12 sm:col-span-2 lg:col-span-4 flex flex-col items-center sm:items-start'>
                        <img src={'/assets/footer/logo.png'} alt="logo" className='pb-8 w-32 sm:w-40 lg:w-48' />
                        <div className='flex gap-4 justify-center sm:justify-start'>
                            <Link href="https://facebook.com" className='footer-fb-icons'>
                                <Image src={'/assets/footer/facebook.svg'} alt="facebook" width={15} height={20} />
                            </Link>
                            <Link href="https://twitter.com" className='footer-icons'>
                                <Image src={'/assets/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                            </Link>
                            <Link href="https://instagram.com" className='footer-icons'>
                                <Image src={'/assets/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                            </Link> 
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}
                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-6 sm:col-span-1 md:col-span-4 lg:col-span-2 flex justify-center sm:justify-start">
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-3 sm:mb-5'>
                                        <Link href="/" className="text-white text-sm font-normal mb-6 space-links hover:underline">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}
                    <div className='col-span-12 sm:col-span-2 lg:col-span-4 flex flex-col gap-6 items-center sm:items-start'>
                        <div className="flex gap-2 items-center">
                            <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite text-center sm:text-left">{t("address")}</h5>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite text-center sm:text-left">{t("phone")}</h5>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite text-center sm:text-left">{t("email")}</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}
                <div className='py-10 flex flex-col lg:flex-row items-center justify-between border-t border-t-bordertop gap-4'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>{t("copyright")}</h4>
                    <div className="flex gap-5 justify-center lg:justify-start">
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">{t("privacy")}</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">{t("terms")}</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
