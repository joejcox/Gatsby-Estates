import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "components/Layout/Layout.component"
import Banner from "components/Banner/Banner.component"
import "src/assets/styles/blog.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          seo
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              blogTitle
              date
            }
            excerpt(pruneLength: 50)
          }
        }
      }
    }
  `)

  const { title, seo } = data.site.siteMetadata
  // const { blogTitle, date } = data.allMarkdownRemark.edges.node.frontmatter
  return (
    <Layout
      docTitle={`Blog - ${title}`}
      seo={seo}
      pageDesc="Gatsby Estates are one of the most popular estate agents in Cardiff. Check out the available properties now!"
    >
      <Banner size="is-small">
        <h1 className="page-title">Estate Agent Blog</h1>
      </Banner>
      <section className="section blog">
        <div className="container">
          {data.allMarkdownRemark.edges.map(edge => {
            const { blogTitle, date } = edge.node.frontmatter
            return (
              <article className="blog__post_preview">
                <div className="blog__post_preview_inner">
                  <h2 className="blog__post_title">{blogTitle}</h2>
                  <p className="blog__post_date">{date}</p>
                  <p>
                    {edge.node.excerpt}
                    <a href="#"> read more</a>
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Blog
