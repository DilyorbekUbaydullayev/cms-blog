import { IAuthor } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getAuthors = cache(async () => {
  const query = gql`
    query MyQuery {
      authors {
        slug
        name
        id
        bio
        image {
          url
        }
        blog {
          id
        }
      }
    }
  `;
  const { authors } = await request<{ authors: IAuthor[] }>(graphqlAPI, query);
  return authors;
});

export const getDetaileddAuthor = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      author(where: { slug: $slug }) {
        bio
        slug
        image {
          url
        }
        name
        blog {
          description
          author {
            ... on Author {
              id
              name
              slug
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
      }
    }
  `;

  const { author } = await request<{
    author: IAuthor;
  }>(graphqlAPI, query, { slug });
  return author;
});
