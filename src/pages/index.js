import getFirstTweentyPosts from "~/lib/getFirstTweentyPosts";
import Layout from "~/components/Layout";
import BlogCard from "~/components/BlogCard";

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <Layout isHome={true}>
      <div className="posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {!!posts.length &&
          posts.map((post) => <BlogCard key={post?.id} post={post} />)}
      </div>
    </Layout>
  );
};

export default Home;
export async function getServerSideProps({ res }) {
  const posts = await getFirstTweentyPosts();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );

  return { props: { posts } };
}
