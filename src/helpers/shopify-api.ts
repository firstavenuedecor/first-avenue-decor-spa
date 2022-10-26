import type { IApiResponse, API_PATH } from '../types'

export async function shopifyApi<T>(path: API_PATH, ...queries: string[]): Promise<IApiResponse<T>> {
  const query = queries.length ? '?' + queries.filter(q => q).join('&') : ''
  const res = await fetch(`https://shopify-api-fad.herokuapp.com${path}${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  })
  .then(res => res.json())
  .catch((e) => {
    console.error('shopify-api error')
    console.error(e)
  })

  return res
}