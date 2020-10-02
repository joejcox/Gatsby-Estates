import React from "react"
import SiteLogo from "components/SiteLogo/SiteLogo.component"
import NavLinks from "components/NavLinks/NavLinks.component"
import "./SiteHeader.styles.scss"

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="container">
        <SiteLogo />
        <nav className="site-header__navigation">
          <NavLinks />
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
