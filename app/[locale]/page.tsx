import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Banner from "../components/Banner/Banner";
import Companies from "../components/Companies/Companies";
import Buyers from "../components/Buyers";
import Provide from "../components/Provide";
import Why from "../components/Why";
import Network from "../components/Network";
import Clientsay from "../components/Clientsay";
import Newsletter from "../components/Newsletter/Newsletter";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <section id="inicio">
        <Banner />
      </section>
      <section id="brochure" className="pb-8 md:pb-16">
        <Why />
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
      <section id="contacto" className="pt-16 md:pt-8">
        <Newsletter />
      </section>
    </main>
  );
}
