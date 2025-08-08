import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Banner from "../components/Banner/Banner";
import Buyers from "../components/Buyers";
import Provide from "../components/Provide";
import Why from "../components/Why";
import Clientsay from "../components/Clientsay";
import Newsletter from "../components/Newsletter/Newsletter";
import Redes from "../components/redes";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <section id="inicio">
        <Banner />
      </section>
      <section id="brochure" className="pb-8 md:pb-16">
        <Why />
        <Redes />
      </section>
      <section id="quienes-somos">
        <Clientsay />
      </section>
      <section id="nuestro-metodo">
        <Buyers />
      </section>
      <section id="servicios">
        <Provide />
      </section>
      <div className="flex justify-center">
        <Image
          src={"/imgs/4Grid.png"}
          alt="banner-image"
          width={1200}
          height={598}
          className="p-5 rounded-3xl"
        />
      </div>
      <section id="contacto" className="pt-16 md:pt-8">
        <Newsletter />
      </section>
    </main>
  );
}
