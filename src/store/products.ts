import { map, action } from 'nanostores'
import { shopifyApiGet } from '../helpers/shopify-api'

import { API_PATH } from '../types'

import type { IProduct } from '../types'

export const products = map<{[key: string]: IProduct}>({})

const metafields = [
  'product.product_type',
  'product.color',
  'product.artist',
  'product.finish',
  'product.assembly_instructions',
  'product.care',
  'product.fabric',
  'product.height',
  'product.width',
  'product.length',
  'product.weight',
  'product.dimensions',
  'product.seat_height',
  'product.arm_height',
  'product.feature_1',
  'product.feature_2',
  'product.feature_3',
  'product.feature_4',
  'product.feature_5',
  'product.feature_6',
  'product.main_material',
  'product.material_1',
  'product.material_2',
  'product.material_3',
  'product.material_4',
  'shipping.details',
  'backorder.details',
  'slots.above_add_to_cart',
]

export const getProduct = action(products, 'get', async (products, handle) => {
  const res = await shopifyApiGet<IProduct>(API_PATH.Product, {
    handle,
    metafields: metafields.join(',')
  })

  products.setKey(handle, res.data)

  return res.data
})
