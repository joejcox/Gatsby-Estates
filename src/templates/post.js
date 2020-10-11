import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout/Layout.component"
import Banner from "components/Banner/Banner.component"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        blogTitle
        date
      }
      html
    }
  }
`

const Post = props => {
  return (
    <Layout
      docTitle={`${props.data.markdownRemark.frontmatter.blogTitle} | Gatsby Estates`}
      pageDesc="Gatsby Estates are one of the most popular estate agents in Cardiff. Check out the available properties now!"
    >
      <Banner size="is-small">
        <h1 className="page-title">
          {props.data.markdownRemark.frontmatter.blogTitle}
        </h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
      </Banner>
      <section className="section">
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </section>
    </Layout>
  )
}

export default Post
