import { IBlog } from "@/types"
import request, { gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PULIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async() => {
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
    `

    const result = await request<{blogs:IBlog[]}>(graphqlAPI,query)
    return result.blogs
}

export const getDetailedBlog = async(slug:string) => {
  const query = gql`
  query MyQuery($slug: String!) {
  blog(where: {slug: $slug}) {
    author {
      ... on Author {
        id
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
  `
  
  const {blog} = await request<{blog:IBlog}>(graphqlAPI,query,{slug})
  return blog

}

