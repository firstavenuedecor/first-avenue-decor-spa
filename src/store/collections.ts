import { map, action } from 'nanostores'
import { shopifyApiGet } from '../helpers/shopify-api'

import { API_PATH } from '../types'

import type { ICollection } from '../types'

export const collections = map<{[key: string]: ICollection}>({})

export const getCollection = action(collections, 'get', async (collections, handle, {afterCursor, beforeCursor, numProducts = 20} = {}) => {
  let cursor = ''
  if (afterCursor) {
    cursor = `afterCursor=${afterCursor}`
  } else if (beforeCursor) {
    cursor = `beforeCursor=${beforeCursor}`
  }

  const res = await shopifyApiGet<ICollection>(API_PATH.Collection, {
    handle,
    numProducts,
    cursor,
  })

  collections.setKey(handle, res.data)

  return res.data
})
