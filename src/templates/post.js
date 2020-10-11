import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout/Layout.component"
import Banner from "components/Banner/Banner.component"
import "./post.styles.scss"

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
  const {
    html,
    frontmatter: { blogTitle, date },
  } = props.data.markdownRemark
  return (
    <Layout
      docTitle={`${blogTitle} | Gatsby Estates`}
      pageDesc="Gatsby Estates are one of the most popular estate agents in Cardiff. Check out the available properties now!"
    >
      <div className="blog-post">
        <Banner size="is-small">
          <h1 className="page-title">{blogTitle}</h1>
          <p>{date}</p>
        </Banner>
        <section className="section">
          <div
            className="container"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </section>
      </div>
    </Layout>
  )
}

export default Post
