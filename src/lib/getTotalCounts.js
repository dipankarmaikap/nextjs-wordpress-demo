import axios from "axios";
import { wordpressUrl } from "~/utils/variables";

export default async function getTotalCounts() {
  const res = await axios.get(`${wordpressUrl}/wp-json/sitemap/v1/totalpages`);
  let data = await res.data;
  if (!data) return [];
  // console.log(data);
  const propertyNames = Object.keys(data);
  let excludeItems = ["user"];
  let totalArray = propertyNames
    .filter((name) => !excludeItems.includes(name))
    .map((name) => {
      return { name, total: data[name] };
    });

  return totalArray;
}
