import getSitemapPageUrls from "~/lib/getSitemapPageUrls";
import generateSitemapPaths from "../../utils/generateSitemapPaths";

export default function SitemapTagPage() {
  return null;
}
function GenerateSiteMap(pageUrls) {
  const paths = generateSitemapPaths(pageUrls);
  return `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths}
  </urlset>
  `;
}
export async function getServerSideProps({ res, params: { slug } }) {
  let isXml = slug.endsWith(".xml");
  if (!isXml) {
    return {
      notFound: true,
    };
  }
  let slugArray = slug.replace(".xml", "").split("_");
  let type = slugArray[0];
  let pageNo = slugArray[1]?.match(/(\d+)/)[0] ?? null;
  let page = pageNo ? parseInt(pageNo) : null;
  let possibleTypes = ["category", "tags", "post", "page"];
  if (!page || !possibleTypes.includes(type)) {
    return {
      notFound: true,
    };
  }
  let pageUrls = await getSitemapPageUrls({ type, page });
  if (!pageUrls?.length) {
    return {
      notFound: true,
    };
  }
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(GenerateSiteMap(pageUrls));
  res.end();
  return { props: {} };
}