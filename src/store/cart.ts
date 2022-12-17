import { map, action } from 'nanostores'
import { shopifyApiGet, shopifyApiPost, shopifyApiPut, shopifyApiPatch } from '../helpers/shopify-api'

import { API_PATH } from '../types'
import type { ICart } from '../types'

// @ts-ignore
export const cart = map<ICart>({})

const cartId = () => cart.get().id || window.localStorage.getItem('cart_id') || ''
let cartCreatePromise: Promise<void> | null = null

export const cartGet = action(cart, 'cartGet', async (cart) => {
  if (!cartId()) {
    await cartCreate()
  }
  const res = await shopifyApiGet<ICart>(API_PATH.Cart, { cart_id: cartId() })
  cart.set(res.data)
})

export const cartCreate = action(cart, 'cartCreate', async (cart) => {
  if (!cartCreatePromise) {
    cartCreatePromise = new Promise(async (resolve) => {
      const res = await shopifyApiPost<ICart>(API_PATH.Cart)
      window.localStorage.setItem('cart_id', res.data.id)
      cart.set(res.data)
      resolve()
    })
  }

  await cartCreatePromise.then(() => cartCreatePromise = null)
})

export const cartAdd = action(cart, 'cartAdd', async (cart, variantId: string, quantity: number) => {
  if (!cartId()) {
    await cartCreate()
  }
  const lines = [{
    merchandiseId: variantId,
    quantity,
  }]
  const body = {
    cart_id: cartId(),
    lines,
  }
  const res = await shopifyApiPut<ICart>(API_PATH.CartItem, body)
  cart.set(res.data)

  console.log(res.data)
})
