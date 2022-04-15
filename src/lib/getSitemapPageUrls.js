import axios from "axios";

export default async function getSitemapPageUrls({ type, page }) {
  let sitemapPerPage = process.env.NEXT_PUBLIC_ITEM_PER_SITEMAP;
  if (type === "category" || type === "tag") {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/sitemap/v1/taxonomy?pageNo=${page}&taxonomyType=${type}&perPage=${sitemapPerPage}`
    );
    return (await res?.data) ?? [];
  }
  if (type === "author") {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/sitemap/v1/author?pageNo=${page}&perPage=${sitemapPerPage}`
    );
    return (await res?.data) ?? [];
  }

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/sitemap/v1/posts?pageNo=${page}&postType=${type}&perPage=${sitemapPerPage}`
  );
  return (await res?.data) ?? [];
}
