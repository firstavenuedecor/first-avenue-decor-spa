import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export interface IArgs {
  API_HOST: string
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: string
}

const DEFAULTS: IArgs = {
  API_HOST: import.meta.env.PUBLIC_API_HOST,
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
}

const args = yargs(hideBin(process.argv)).default<IArgs>(DEFAULTS).argv

export default args as IArgs
