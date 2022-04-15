import Link from "next/link";
import ImageComponent from "./ImageComponent";
import PostAuthor from "./PostAuthor";

export default function BlogCard({ post }) {
  const { featuredImage, title, excerpt, slug, author } = post;
  return (
    <>
      <article className="post bg-white shadow-lg">
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
            <p className="font-bold text-3xl">No Featured Image in this post</p>
          </div>
        )}
        <div className="p-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <PostAuthor author={author.node} />
          <div
            className="line-clamp-3 mb-3"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Link href={`/blog/${slug}`}>
            <a className="underline hover:text-indigo-600">Read full article</a>
          </Link>
        </div>
      </article>
    </>
  );
}
