import { getSettingByGroup } from "@/api/settings";
import Footer from "./Footer";
import { getNavigationLinks } from "@/api/navigation-links";

export default async function FooterWrapper() {
  const settings = await getSettingByGroup("site");
  const navbarLinks = await getNavigationLinks("social-links");
  return <Footer settings={settings?.site} social={navbarLinks} />;
}
