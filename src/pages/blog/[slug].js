import Layout from "~/components/Layout";
import getPostDetailsBySlug from "~/lib/getPostDetailsBySlug";
import ImageComponent from "~/components/ImageComponent";
import parsePostContent from "~/utils/parsePostContent";

const ArticlePage = ({ post }) => {
  const { featuredImage, title, content } = post;
  return (
    <Layout>
      <article className="post">
        <header className="w-full aspect-[4/2] md:aspect-[6/3] overflow-hidden relative max-w-screen-lg mx-auto">
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
            <div className="w-full aspect-[4/2] md:aspect-[6/3] bg-gray-200 flex items-center justify-center p-4">
              <p className="font-bold text-3xl">
                No Featured Image in this post
              </p>
            </div>
          )}
        </header>
        <main className="my-4 md:my-12">
          <h2 className="text-4xl font-bold max-w-screen-md mx-auto ">
            {title}
          </h2>
          <div className="max-w-xl mx-auto mt-8 prose  prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
            {parsePostContent(content)}
          </div>
        </main>
      </article>
    </Layout>
  );
};

export default ArticlePage;
export async function getServerSideProps({ res, params: { slug } }) {
  const post = await getPostDetailsBySlug({ slug });
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );

  return { props: { post } };
}
