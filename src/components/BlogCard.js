import Link from "next/link";
import ImageComponent from "./ImageComponent";

export default function BlogCard({ post }) {
  const { featuredImage, title, excerpt, slug } = post;
  return (
    <>
      <article className="post bg-white shadow-lg">
        <Link href={`/blog/${slug}`}>
          <a>
            <header>
              {featuredImage ? (
                <ImageComponent
                  src={featuredImage?.node?.sourceUrl}
                  alt={featuredImage?.node?.altText ?? "Picture of the author"}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={featuredImage.node.dataUrl}
                  objectFit="cover"
                />
              ) : (
                <div className="bg-gray-200 w-full aspect-[4/2] md:aspect-[6/3] flex items-center justify-center p-4">
                  <p className="font-bold text-3xl">
                    No Featured Image in this post
                  </p>
                </div>
              )}
            </header>
            <main className="p-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </main>
          </a>
        </Link>
      </article>
    </>
  );
}
