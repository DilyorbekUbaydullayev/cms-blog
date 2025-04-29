import { IBlog, ICategoryAndtags } from "@/types";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PULIC_GRAPHCMS_ENDPOINT!;
export const getCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				name
				slug
			}
		}
	`

	const { categories } = await request<{ categories: ICategoryAndtags[] }>(
		graphqlAPI,
		query
	)
	return categories
}
export const getBlogsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
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

  const { category } = await request<{ category: { blog: IBlog[]; name: string } }>(
    graphqlAPI,
    query,
    { slug }
  );
  return category;
};
