import featch from "./fetch";

export default async function getFirstTweentyPosts() {
  const data = await featch(
    `
        query GetFirstTweentyPosts {
            posts(first: 20) {
              nodes {
                id
                slug
                uri
                title
                excerpt
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
          
            `
  );
  return data?.posts?.nodes ?? [];
}
