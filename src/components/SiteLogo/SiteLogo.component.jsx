import React from "react"
import { Link } from "gatsby"

const SiteLogo = ({ title }) => {
  return (
    <section className="site-header__logo">
      <h2>
        <Link to="/">{title}</Link>
      </h2>
    </section>
  )
}

export default SiteLogo
