import React from "react"
import Helmet from "react-helmet"
import SiteHeader from "components/SiteHeader/SiteHeader.component"
import SiteFooter from "components/SiteFooter/SiteFooter.component"
import "./Layout.styles.scss"

const Layout = ({ docTitle, pageDesc, children }) => {
  return (
    <>
      <Helmet>
        <title>{docTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>
      <div className="wrapper">
        <div className="wrapper__top">
          <SiteHeader />
          <main className="site-main">{children}</main>
        </div>
        <div className="wrapper__bottom">
          <SiteFooter />
        </div>
      </div>
    </>
  )
}

export default Layout
