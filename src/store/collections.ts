import { map, action } from 'nanostores'
import { shopifyApi } from '../helpers/shopify-api'

import { API_PATH } from '../types'

import type { ICollection } from '../types'

export const collections = map<{[key: string]: ICollection}>({})

export const getCollection = action(collections, 'get', async (collections, handle) => {
  const res = await shopifyApi<ICollection>(API_PATH.Collection, `handle=${handle}`, `numProducts=20`)
  collections.setKey(handle, res.data)

  return res.data
})
