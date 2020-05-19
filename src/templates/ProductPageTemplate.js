import React from "react"
import { graphql } from "gatsby"
import ProductDetail from "../components/ProductDetail"

const ProductPageTemplate = () => {
    return (
        <div>
            <ProductDetail />
        </div>
    )
}

const PRODUCT_QUERY = graphql`
  query ProductQuery {
    shopifyProduct {
      edges {
        node {
          id
          title
          images {
            localFile {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
          publishedAt(formatString: "YYYY")
          description
          descriptionHtml
          variants {
            sku
            id
            title
            price
          }
        }
      }
    }
  }
`

export const query = PRODUCT_QUERY 

export default ProductPageTemplate