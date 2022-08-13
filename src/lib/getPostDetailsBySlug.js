import featch from "./fetch";

export default async function getPostDetailsBySlug({ slug }) {
  let uri = slug.join("/");
  const data = await featch(
    `
    query GetPostDetails($uri: String!) {
      nodeByUri(uri: $uri) {
        uri
        id
        ... on Post {
          id
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
    }
                `,
    {
      variables: { uri },
    }
  );
  return data?.nodeByUri;
}
