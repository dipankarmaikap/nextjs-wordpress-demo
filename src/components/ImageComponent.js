import React, { useState } from "react";
import Image from "next/image";
export default function ImageComponent({ src, alt, blurDataURL, ...props }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-full aspect-[4/2] md:aspect-[6/3] bg-gray-200 overflow-hidden relative">
      {blurDataURL ? (
        <Image
          src={src}
          alt={alt ?? "Picture of the author"}
          blurDataURL={blurDataURL}
          {...props}
        />
      ) : (
        <Image
          src={src}
          alt={alt ?? "Picture of the author"}
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </div>
  );
}
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
