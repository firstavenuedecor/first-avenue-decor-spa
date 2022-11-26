/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}