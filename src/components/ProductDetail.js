import React, { useState, useLayoutEffect } from "react"
import Img from "gatsby-image"
import ShopifyBuy from "@shopify/buy-button-js"
import { Base64 } from "js-base64" 

const ProductDetail = ({ product }) => {

    const [selectedVariant, setVariant] = useState(product.variants[0])

    useLayoutEffect(() => {
        const client = ShopifyBuy.buildClient({
          domain: `${process.env.SHOP_NAME}.myshopify.com`,
          storefrontAccessToken: process.env.ACCESS_TOKEN,
        })

        const ui = ShopifyBuy.UI.init(client)
        const decoded = Base64.decode(product.shopifyId)
        const actualId = decoded.replace("gid://shopify/Product/", "")

        ui.createComponent('product', {
            id: actualId,
            node: document.getElementById('button')
        })
    }, [])

    return (
      <div>
        <h1>{product.title}</h1>
        {/* <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
        <p>{product.description}</p>
        <p>${selectedVariant.price}</p> */}
        <div id="button"></div>
        {/* <select
            onChange={e => {
                const selected = product.variants.filter(
                  variant => variant.sku === e.target.value
                )
                setVariant(selected[0])
            }}
          value={selectedVariant.sku}
        >
          {product.variants.map(variant => {
            return (
              <option key={variant.id} value={variant.sku}>
                {variant.title}
              </option>
            )
          })}
        </select> */}
      </div>
    )
}

export default ProductDetail
