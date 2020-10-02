import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SiteLogo = () => {
  return (
    <section className="site-header__logo">
      <h2>
        <AniLink cover to="/">
          Gatsby Estates
        </AniLink>
      </h2>
    </section>
  )
}

export default SiteLogo
