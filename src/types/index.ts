export interface IPageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
  endCurcor: string
}

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
}

export interface IMenu {
  handle: string
  title: string
  items: IMenuItem[]
}

// Collection]
export interface IImage {
  altText: string
  url: string
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
  products: Array<{
    availableForSale: boolean
    compareAtPriceRange: {
      maxVariantPrice: {
        amount: number
      }
      minVariantPrice:  {
        amount: number
      }
    }
    featuredImage: IImage
    handle: string
    priceRange: {
      maxVariantPrice: {
        amount: number
      }
      minVariantPrice: {
        amount: number
      }
    }
    productType: string
    title: string
    totalInventory: string
    vendor: string
  }>
}
