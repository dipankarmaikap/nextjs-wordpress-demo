import Image from "next/image";
import FakeBlurupImage from "./FakeBlurupImage";
export default function ImageComponent({ src, alt, blurDataURL, ...props }) {
  return (
    <>
      {blurDataURL ? (
        <span className="w-full aspect-[4/2] md:aspect-[6/3] bg-gray-200 overflow-hidden relative block">
          <Image
            src={src}
            alt={alt ?? "Picture of the author"}
            blurDataURL={blurDataURL}
            {...props}
          />
        </span>
      ) : (
        <span className="aspect-[4/2] overflow-hidden relative block">
          <FakeBlurupImage src={src} alt={alt ?? "Picture of the author"} />
        </span>
      )}
    </>
  );
}
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
