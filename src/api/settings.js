import { unstable_cache } from "next/cache";

export const getSettingByGroup = unstable_cache(
  async (group) => {
    try {
      const response = await fetch(
        `${process.env.API_URL}/settings/${group}/prefix`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.log("Failed to fetch navigation links");
      }
      const data = await response.json();
      const settings = data?.data?.reduce((acc, item) => {
        const [group, field] = item.key.split(".");
        if (!acc[group]) acc[group] = {};
        acc[group][field] = item.value;
        return acc;
      }, {});
      return settings;
      // return data.data || [];
    } catch (error) {
      console.error("Error fetching navigation links:", error);
      return [];
    }
  },
  ["settings-group"],
  {
    revalidate: (parseInt(process.env.NEXT_PUBLIC_CACHE_TIME) || 1) * 60 * 60,
    tags: ["settings-group"],
  }
);
