import { IBlog, ICategoryAndtags } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;
export const getTags = async () => {
	const query = gql`
		query MyQuery {
			tags {
				name
				slug
			}
		}
	`

	const { tags } = await request<{ tags: ICategoryAndtags[] }>(
		graphqlAPI,
		query
	)
	return tags
}

export const getBlogsByTag = cache( async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
       blog {
       description
      author {
        ... on Author {
          id
          name
          image {
            url
          }
        }
      }
      content {
        html
      }
      createdAt
      image {
        url
      }
      slug
      tag {
        name
        slug
      }
        category {
        name
        slug
      }
      title
    }
    name
      }
    }
  `;

  const { tag } = await request<{ tag: { blog: IBlog[]; name: string } }>(
    graphqlAPI,
    query,
    { slug }
  );
  return tag;
});
