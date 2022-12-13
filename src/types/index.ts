export interface IApiResponse<T> {
  data: T
  pageInfo: {}
  error: boolean
  errors: any[]
}

export enum API_PATH {
  Shop = '/shop',
  Menu = '/menu',
  Collection = '/collection',
  CollectionImage = '/collection/image',
  Product = '/product',
}

/* SHOPIFY General*/
export interface IPageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
  endCursor: string
}

export interface IMoney {
  amount: number
  currencyCode: string
}

export interface IMetafield {
  namespace: string
  key: string
  type: string // https://shopify.dev/apps/metafields/types
  value: string
}

/* ENDPOINTS */
// Shop
export interface IShop {
  name: string,
  description: string
}

// Menu
export interface IMenuItem {
  items?: IMenuItem[]
  title: string
  type: string
  url: string
  image?: IImage
}

export interface IMenu {
  handle: string
  title: string
  items: IMenuItem[]
}

// Collection
export interface IImage {
  altText: string
  url: string
}

export interface ICollectionProduct {
  availableForSale: boolean
  compareAtPriceRange: {
    maxVariantPrice: {
      amount: string
    }
    minVariantPrice:  {
      amount: string
    }
  }
  image: {
    nodes: IImage[]
  }
  handle: string
  priceRange: {
    maxVariantPrice: {
      amount: string
    }
    minVariantPrice: {
      amount: string
    }
  }
  productType: string
  title: string
  totalInventory: string
  vendor: string
}

export interface ICollection {
  description: string
  descriptionHtml: string
  handle: string
  image: IImage
  seo: {
    description: string
    title: string
  }
  title: string
  products: {
    nodes: ICollectionProduct[]
    pageInfo: IPageInfo
  }
}

export type ICollectionImage = Pick<ICollection, 'image'>

// Product
export interface IProduct {
  availableForSale: boolean
  compareAtPriceRange: {
    maxVariantPrice: IMoney
    minVariantPrice: IMoney
  }
  description: string
  descriptionHtml: string
  handle: string
  id: string
  metafields: {
    [key: string]: IMetafield
  }[]
}
