import { map, action } from 'nanostores'
import { shopifyApi } from '../helpers/shopify-api'

import { API_PATH } from '../types'

import type { IProduct } from '../types'

export const products = map<{[key: string]: IProduct}>({})

const metafields = [
  'product.color',
  'product.height',
]

export const getProduct = action(products, 'get', async (products, handle) => {
  const res = await shopifyApi<IProduct>(
    API_PATH.Product,
    `handle=${handle}`,
    `metafields=${metafields.join(',')}`,
  )

  products.setKey(handle, res.data)

  return res.data
})
