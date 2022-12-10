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
}

/* SHOPIFY */
export interface IPageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
  endCursor: string
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
