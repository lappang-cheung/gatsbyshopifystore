import React from "react"
import Client from "shopify-buy"

export const client = Client.buildClient({
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.ACCESS_TOKEN,
})

export const StoreContext = React.createContext({
    client,
})