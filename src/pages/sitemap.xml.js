import getSitemapPaths from "~/utils/getSitemapPaths";
import getTotalCounts from "~/lib/getTotalCounts";
export default function SitemapPage() {
  return null;
}
function GenerateSiteMap(details) {
  const { totalCategories, totalPublishedPages } = details;
  const { totalPublishedPosts, totalTags, totalUsers } = details;
  const categoryPaths = getSitemapPaths(totalCategories, "category_sitemap");
  const tagPaths = getSitemapPaths(totalTags, "tag_sitemap");
  const postPaths = getSitemapPaths(totalPublishedPosts, "post_sitemap");
  const pagePaths = getSitemapPaths(totalPublishedPages, "page_sitemap");
  const authorPaths = getSitemapPaths(totalUsers, "author_sitemap");

  return `
  <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
           xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pagePaths}
        ${authorPaths}
        ${categoryPaths}
        ${tagPaths}
        ${postPaths}
    </sitemapindex>
  `;
}
export async function getServerSideProps({ res }) {
  const details = await getTotalCounts();
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(GenerateSiteMap(details));
  res.end();
  return { props: {} };
}
