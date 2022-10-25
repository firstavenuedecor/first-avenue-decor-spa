import { map, action } from 'nanostores'
import { shopifyApi } from '../helpers/shopify-api'

import { API_PATH } from '../types'
import type { IShop } from '../types'

export const shop = map<IShop>({
  name: '',
  description: '',
})

const setShop = action(shop, 'get', async (shop) => {
  const res = await shopifyApi<IShop>(API_PATH.Shop)
  const { name, description } = res.data
  shop.set({ name, description })
})

setShop()