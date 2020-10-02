import React from "react"
import Layout from "components/Layout/Layout.component"
import Banner from "components/Banner/Banner.component"

const About = () => {
  return (
    <Layout
      docTitle="About | Gatsby Estates"
      pageDesc="Gatsby Estates are one of the most popular estate agents in Cardiff. Check out the available properties now!"
    >
      <Banner size="is-small">
        <h1 className="page-title">Estate Agents in Cardiff</h1>
      </Banner>
    </Layout>
  )
}

export default About
