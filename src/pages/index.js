import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import "../../node_modules/slick-carousel/slick/slick.scss"
import "../../node_modules/slick-carousel/slick/slick-theme.scss"

import Layout from "components/Layout/Layout.component"
import Banner from "components/Banner/Banner.component"

import { FaSearch } from "react-icons/fa"
import bannerImage from "images/banner6.jpg"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          seo
        }
      }
    }
  `)

  const { title, seo } = data.site.siteMetadata
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const contentful = require("contentful")
    const client = contentful.createClient({
      space: process.env.GATSBY_ENV_CONTENTFUL_SPACE_ID,
      accessToken: process.env.GATSBY_ENV_CONTENTFUL_ACCESS_TOKEN,
    })

    client.getEntries().then(({ items }) => {
      setProperties(items)
    })
  }, [])

  return (
    <Layout
      docTitle={title}
      seo={seo}
      pageDesc="This is the home page, please click if you like buying properties!"
    >
      <Banner
        size="is-medium"
        hasImage
        bannerImage={bannerImage}
        imageAlt="Nice property brah"
        hasOverlay
      >
        <h1 className="page-title">Find properties in your area now!</h1>
        <Link to="/properties" className="button">
          <FaSearch /> &nbsp; Search Properties
        </Link>
      </Banner>
      <section className="section">
        <div className="container">
          <h2 className="section__title">Latest Properties</h2>
          <article className="section__latest_properties">
            {properties
              .slice(0, 4)
              .reverse()
              .map(item => {
                const {
                  fields: {
                    mainImage: {
                      fields: {
                        title,
                        file: { url },
                      },
                    },
                  },
                  sys: { id },
                } = item
                return (
                  <div className="property-slide" key={id}>
                    <img className="image" src={url} alt={title} />
                  </div>
                )
              })}
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Home
