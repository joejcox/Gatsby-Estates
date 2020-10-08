import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SiteLogo from "components/SiteLogo/SiteLogo.component"
import NavLinks from "components/NavLinks/NavLinks.component"
import "./SiteHeader.styles.scss"

const SiteHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="site-header">
      <div className="container">
        <SiteLogo title={data.site.siteMetadata.title} />
        <nav className="site-header__navigation">
          <NavLinks />
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
