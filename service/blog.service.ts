
import { IArchiveBlog, IBlog } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs {
        title
        author {
          ... on Author {
            id
            image {
              url
            }
            name
          }
        }
        category {
          name
          slug
        }
        description
        tag {
          name
          slug
        }
        image {
          url
        }
        publishedAt
        createdAt
        content {
          html
        }
        slug
      }
    }
  `;

  const result = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
  return result.blogs;
};

export const getDetailedBlog =cache( async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        author {
          ... on Author {
            id
            slug
            name
            image {
              url
            }
            bio
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
  `;

  const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug });
  return blog;
});

export const getSearchBlogs = async (title: string) => {
  const query = gql`
    query MyQuery($title: String!) {
      blogs(where: { title_contains: $title }) {
        title
        image {
          url
        }
        slug
        createdAt
      }
    }
  `;
  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
    title,
  });
  return blogs;
};

export const getArchiveBlogs = async () => {
  const query = gql`
    query Myquery {
      blogs(where: { archive: true }) {
        title
        createdAt
        slug
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
  const filteredBlogs = blogs.reduce(
    (acc: { [year: string]: IArchiveBlog }, blog: IBlog) => {
      const year = blog.createdAt.substring(0, 4);
      if (!acc[year]) {
        acc[year] = { year, blogs: [] };
      }
      acc[year].blogs.push(blog);
      return acc;
    },
    {}
  );
  const results:IArchiveBlog[]=Object.values(filteredBlogs)
  return results;
};
