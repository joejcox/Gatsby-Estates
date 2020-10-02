import React from "react"
import Layout from "components/Layout/Layout.component"
import Banner from "components/Banner/Banner.component"

const PropertiesPage = () => {
  return (
    <Layout
      docTitle="Property Search | Gatsby Estates"
      pageDesc="Search properties in Cardiff now! Choose whether you'd like to rent or buy property in Cardiff. Find houses to rent in the Vale of Glamorgan now."
    >
      <Banner size="is-small">
        <h1 className="page-title">Search Properties in Cardiff</h1>
      </Banner>
    </Layout>
  )
}

export default PropertiesPage
