import featch from "./fetch";

export default async function getPostDetailsBySlug({ slug }) {
  const data = await featch(
    `
        query GetPostDetails($slug: ID!) {
            post(
              id: $slug
              idType: SLUG
            ) {
              title
              content
              date
              featuredImage {
                node {
                  altText
                  dataUrl
                  sourceUrl
                }
              }
              author {
                node {
                  avatar {
                    url
                  }
                  name
                  uri
                }
              }
            }
          }
                `,
    {
      variables: { slug },
    }
  );
  return data?.post;
}
