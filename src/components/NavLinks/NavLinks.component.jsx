import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./NavLinks.styles.scss"

const NavLinks = () => {
  return (
    <>
      <AniLink cover className="nav-link" to="/" activeClassName="active">
        Home
      </AniLink>
      <AniLink cover className="nav-link" to="/about">
        About
      </AniLink>
      <AniLink cover className="nav-link" to="/properties">
        Properties
      </AniLink>
      <AniLink cover className="nav-link" to="/contact">
        Contact
      </AniLink>
    </>
  )
}

export default NavLinks
