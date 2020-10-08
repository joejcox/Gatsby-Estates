import React from "react"
import { Link } from "gatsby"
import "./NavLinks.styles.scss"

const NavLinks = () => {
  return (
    <>
      <Link className="nav-link" to="/" activeClassName="active">
        Home
      </Link>
      <Link className="nav-link" to="/about/" activeClassName="active">
        About
      </Link>
      <Link className="nav-link" to="/blog/" activeClassName="active">
        Blog
      </Link>
      <Link to="/properties/" activeClassName="active" className="nav-link">
        Properties
      </Link>
      <Link className="nav-link" to="/contact/" activeClassName="active">
        Contact
      </Link>
    </>
  )
}

export default NavLinks
