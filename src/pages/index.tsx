import type { NextPage } from "next";
import { useEffect, useState } from "react";
import getTotalCounts from "~/lib/getTotalCounts";
const Home: NextPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function name() {
      const res = await getTotalCounts();
      setData(res);
    }

    name();
  }, []);
  console.log(data);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800">
        Nextjs Tailwind Wordpress
      </h1>
    </div>
  );
};

export default Home;
