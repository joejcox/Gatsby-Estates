import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./SiteFooter.styles.scss"

const SiteFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <footer className="site-footer">
      <div className="container">
        <section className="site-footer__brand">
          &copy; {data.site.siteMetadata.title} {new Date().getFullYear()}
        </section>
        <section className="site-footer__author">
          Website by{" "}
          <a href="http://joecoxdev.com">{data.site.siteMetadata.author}</a>
        </section>
      </div>
    </footer>
  )
}

export default SiteFooter
