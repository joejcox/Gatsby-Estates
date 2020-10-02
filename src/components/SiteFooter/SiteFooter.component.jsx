import React from "react"
import "./SiteFooter.styles.scss"

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <section className="site-footer__brand">
          &copy; Sitename {new Date().getFullYear()}
        </section>
      </div>
    </footer>
  )
}

export default SiteFooter
