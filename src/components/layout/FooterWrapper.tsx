import { getSettingByGroup } from "@/api/settings";;
import Footer from "./Footer";

export default async function FooterWrapper() {
  const settings = await getSettingByGroup("site");
  return <Footer  settings={settings?.site} />;
}
