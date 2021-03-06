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
            fields {
              slug
            }
            excerpt(pruneLength: 50)
          }
        }
      }
    }
  `)

  const { title, seo } = data.site.siteMetadata
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
            const { slug } = edge.node.fields
            return (
              // make this in to a component
              <article key={blogTitle} className="blog__post_preview">
                <div className="blog__post_preview_inner">
                  <h2 className="blog__post_title">
                    <a href={`/blog/${slug}`}>{blogTitle}</a>
                  </h2>
                  <p className="blog__post_date">{date}</p>
                  <p>
                    {edge.node.excerpt}
                    <a href={`/blog/${slug}`}> read more</a>
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
