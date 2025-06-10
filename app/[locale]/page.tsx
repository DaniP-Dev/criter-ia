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
      <Banner />
      <Companies />
      <Buyers />
      <Provide />
      <Why />
      {/* <Network /> Map */}
      <section className="bg-white py-16" />
      <Newsletter />
    </main>
  );
}
