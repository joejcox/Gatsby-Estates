import React from "react"

const Property = ({ pageContext }) => {
  const { singleProperty } = pageContext
  return (
    <div>
      Name: {singleProperty.name}
      Price: {singleProperty.price}
      Description: {singleProperty.description}
    </div>
  )
}

export default Property
