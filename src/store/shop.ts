import { map, action } from 'nanostores'
import { shopifyApiGet } from '../helpers/shopify-api'

import { API_PATH } from '../types'
import type { IShop } from '../types'

export const shop = map<IShop>({
  name: '',
  description: '',
  brand: {
    colors: {
      primary: {
        background: '',
        foreground: '',
      },
      secondary: {
        background: '',
        foreground: '',
      },
    },
    coverImage: {
      image: {
        altText: '',
        url: '',      
      },
    },
    logo: {
      image: {
        altText: '',
        url: '',      
      },
    },
    shortDescription: '',  
    slogan: '',  
    squareLogo: {
      image: {
        altText: '',
        url: '',      
      },
    },
  }
})

const setShop = action(shop, 'get', async (shop) => {
  const res = await shopifyApiGet<IShop>(API_PATH.Shop)
  shop.set(res.data)
})

setShop()