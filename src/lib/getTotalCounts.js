import axios from "axios";

export default async function getTotalCounts() {
  const res = await axios({
    url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/sitemap/v1/totalpages`,
    method: "get",
  });
  return (await res?.data) ?? {};
}
