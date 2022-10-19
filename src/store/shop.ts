import { map, action } from 'nanostores'

export interface IShop {
  name: string,
  description: string
}

export const shop = map<IShop>({
  name: '',
  description: '',
})

const setShop = action(shop, 'get', async (shop) => {
  const res = await fetch(import.meta.env.PUBLIC_SHOPIFY_API_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: `
      {
        shop {
          description 
          name
        }
      }
    `
  }).then(res => {
    if (res.status === 200) {
      return res.json()
    }
    
    return Promise.reject(res)
  }).catch(e => console.error(e))

  const { name, description } = res.data.shop
  shop.set({ name, description })
})

setShop()