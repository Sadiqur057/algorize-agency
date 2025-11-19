import { unstable_cache } from "next/cache";
export const getNavigationLinks = unstable_cache(
  async (type) => {
    try {
      const response = await fetch(
        `${process.env.API_URL}/public/menus?type=${type}`,
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
      return data.data;
      // return navigationData.data || [];
    } catch (error) {
      console.error("Error fetching navigation links:", error);
      return [];
    }
  },
  ["navigation-links"],
  {
    revalidate: (parseInt(process.env.NEXT_PUBLIC_CACHE_TIME) || 1) * 60 * 60,
    tags: ["navigation-links"],
  }
);

