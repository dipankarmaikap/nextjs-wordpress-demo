import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
export default function FakeBlurupImage({ src, alt }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <Image
        layout="fill"
        objectFit="cover"
        className={clsx("group-hover:opacity-75 duration-700 ease-in-out", {
          "grayscale blur-2xl scale-110": isLoading,
          "grayscale-0 blur-0 scale-100": !isLoading,
        })}
        src={src}
        alt={alt}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}
