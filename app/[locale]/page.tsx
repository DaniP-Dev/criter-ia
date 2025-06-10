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
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <LanguageSwitcher />

      <div style={{ border: '2px solid red' }}>
        <Banner />
      </div>
      <div>
        <Companies />
      </div>
      <div>
        <Buyers />
      </div>
      <div>
        <Provide />
      </div>
      <div>
        <Why />
      </div>
      <div>
        <Network />
      </div>
      <div>
        <Clientsay />
      </div>
      <div>
        <Newsletter />
      </div>
    </main>
  );
}
