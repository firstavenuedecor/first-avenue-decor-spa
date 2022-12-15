import type { IApiResponse, API_PATH } from '../types'

const API_HOST = import.meta.env.PUBLIC_API_HOST
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

export async function shopifyApi<T>(path: API_PATH, method: string, ...queries: string[]): Promise<IApiResponse<T>> {
  if (!SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error('Storefront Access Token environment variable not set.')
  }

  const query = queries.length ? '?' + queries.filter(q => q).join('&') : ''
  const res = await fetch(`${API_HOST}${path}${query}`, {
    method,
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

export function shopifyApiGet<T>(path: API_PATH, ...queries: string[]): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'GET', ...queries)
}

export function shopifyApiPost<T>(path: API_PATH, ...queries: string[]): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'POST', ...queries)
}

export function shopifyApiPut<T>(path: API_PATH, ...queries: string[]): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'PUT', ...queries)
}

export function shopifyApiPatch<T>(path: API_PATH, ...queries: string[]): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'PATCH', ...queries)
}
