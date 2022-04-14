import axios from "axios";

export default async function getSitemapPageUrls({ type, page }) {
  let sitemapPerPage = process.env.NEXT_PUBLIC_ITEM_PER_SITEMAP;
  if (type === "category" || type === "tags") {
    const res = await axios({
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/sitemap/v1/taxonomy?pageNo=${page}&taxonomyType=${type}&perPage=${sitemapPerPage}`,
      method: "get",
    });
    return (await res?.data) ?? [];
  }

  const res = await axios({
    url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/sitemap/v1/posts?pageNo=${page}&postType=${type}&perPage=${sitemapPerPage}`,
    method: "get",
  });
  return (await res?.data) ?? [];
}
