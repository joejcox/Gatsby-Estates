import React from "react"
import "./Banner.styles.scss"

const Banner = ({
  size,
  children,
  hasOverlay,
  hasImage,
  bannerImage,
  imageAlt,
}) => {
  return (
    <section className={`banner ${size ? size : ""}`}>
      <article className="banner__text">
        <div className="container">{children}</div>
        {hasOverlay ? <div className="overlay"></div> : null}
      </article>
      {hasImage ? (
        <img src={bannerImage} alt={imageAlt} className="banner__image" />
      ) : null}
    </section>
  )
}

export default Banner
