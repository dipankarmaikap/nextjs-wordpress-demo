import featch from "./fetch";

export default async function getFirstTweentyPosts() {
  const data = await featch(
    `
        query GetFirstTweentyPosts {
            posts(first: 20) {
              nodes {
                id
                slug
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
