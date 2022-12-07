import type { IApiResponse, API_PATH } from '../types'
import args from '../helpers/args'

const { API_HOST, SHOPIFY_STOREFRONT_ACCESS_TOKEN } = args

export async function shopifyApi<T>(path: API_PATH, ...queries: string[]): Promise<IApiResponse<T>> {
  if (!SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error('Storefront Access Token environment variable not set.')
  }

  const query = queries.length ? '?' + queries.filter(q => q).join('&') : ''
  const res = await fetch(`${API_HOST}${path}${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  })
  .then(res => res.json())
  .catch((e) => {
    console.error('shopify-api error')
    console.error(e)
  })

  return res
}