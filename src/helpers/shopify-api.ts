import type { IApiResponse, API_PATH } from '../types'

export type IFetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH'
export interface IFetchParams {
  [key: string]: any
}

const API_HOST = import.meta.env.PUBLIC_API_HOST
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

export async function shopifyApi<T>(
  path: API_PATH,
  method: IFetchMethod = 'GET',
  queries: IFetchParams = {},
  body: IFetchParams = {}
): Promise<IApiResponse<T>> {
  if (!SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error('Storefront Access Token environment variable not set.')
  }

  const query = Object.keys(queries).map(k => `${k}=${queries[k]}`).join('&')
  const res = await fetch(`${API_HOST}${path}?${query}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: ['GET', 'HEAD'].includes(method) ? null : JSON.stringify(body),
  })
  .then(res => res.json())
  .catch((e) => {
    console.error('shopify-api error')
    console.error(e)
  })

  return res
}

export function shopifyApiGet<T>(path: API_PATH, params: IFetchParams = {}): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'GET', params, {})
}

export function shopifyApiPost<T>(path: API_PATH, params: IFetchParams = {}): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'POST', {}, params)
}

export function shopifyApiPut<T>(path: API_PATH, params: IFetchParams = {}): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'PUT', {}, params)
}

export function shopifyApiPatch<T>(path: API_PATH, params: IFetchParams = {}): Promise<IApiResponse<T>> {
  return shopifyApi(path, 'PATCH', {}, params)
}
