import { map, action } from 'nanostores'
import { shopifyApiGet, shopifyApiPost, shopifyApiPut, shopifyApiPatch } from '../helpers/shopify-api'

import { API_PATH } from '../types'
import type { ICart } from '../types'

// @ts-ignore
export const cart = map<ICart>({})

export const cartGet = action(cart, 'cartGet', async (cart) => {
  let cartId = cart.get().id || window.localStorage.getItem('cart_id')
  if (!cartId) {
    const { id } = await cartCreate()
    cartId = id
  }
  const res = await shopifyApiGet<ICart>(API_PATH.Cart, `cart_id=${cartId}`)
  cart.set(res.data)

  return res.data
})

export const cartCreate = action(cart, 'cartCreate', async (cart) => {
  const res = await shopifyApiPost<ICart>(API_PATH.Cart)
  window.localStorage.setItem('cart_id', res.data.id)
  cart.set(res.data)
  
  return res.data
})

export const cartAdd = action(cart, 'cartAdd', async (cart) => {
  if (cart.get().id) {
    await cartCreate()
  }
  const res = await shopifyApiPut<ICart>(API_PATH.Shop)
  cart.set(res.data)

  return res.data
})
