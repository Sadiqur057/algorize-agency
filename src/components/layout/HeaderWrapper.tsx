import { getSettingByGroup } from "@/api/settings";
import { Header } from "./Header";
import { getNavigationLinks } from "@/api/navigation-links";

export default async function HeaderWrapper() {
  const navbarLinks = await getNavigationLinks("topbar");
  const settings = await getSettingByGroup("site");
  return <Header navbarLinks={navbarLinks} settings={settings?.site} />;
}
