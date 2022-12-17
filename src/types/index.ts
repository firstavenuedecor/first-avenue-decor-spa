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
  Cart = '/cart',
  CartItem = '/cart/item',
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

export interface IPriceRange {
  maxVariantPrice: IMoney
  minVariantPrice: IMoney
}

export interface IMetafield {
  namespace: string
  key: string
  type: string // https://shopify.dev/apps/metafields/types
  value: string
}

export type IWeightUnit = 'GRAMS'|'KILOGRAMS'|'OUNCES'|'POUNDS'

/* ENDPOINTS */
// Shop
export interface IShop {
  name: string,
  description: string
  brand: {
    colors: {
      primary: {
        background: string
        foreground: string
      }
      secondary: {
        background: string
        foreground: string
      }
    }
    coverImage: {
      image: IImage
    }
    logo: {
      image: IImage
    }
    shortDescription: string
    slogan: string
    squareLogo: {
      image: IImage
    }
  }
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
export interface IProductVariant {
  availableForSale: boolean
  barcode: string
  compareAtPrice: IMoney
  currentlyNotInStock: boolean
  id: string
  image: IImage
  price: IMoney
  quantityAvailable: number
  selectedOptions: {
    name: string
    value: string
  }[]
  sku: string
  title: string
  weight: number
  weightUnit: IWeightUnit
}

export interface IProduct {
  availableForSale: boolean
  compareAtPriceRange: IPriceRange
  description: string
  descriptionHtml: string
  handle: string
  id: string
  metafields: {
    [key: string]: IMetafield
  }
  options: {
    id: string
    name: string
    values: string[]
  }[]
  priceRange: IPriceRange
  productType: string
  seo: {
    description: string
    title: string
  }
  tags: string[]
  title: string
  totalInventory: number
  vendor: string
  images: IImage[]
  variants: IProductVariant[]
}

// Cart
export interface ICartLineAdd {
  merchandiseId: string
  quantity: number
}

export interface ICart {
  attributes: {
    key: string
    value: string
  }
  checkoutUrl: string
  cost: {
    subtotalAmount: IMoney
    subtotalAmountEstimated: boolean
    totalAmount: IMoney
    totalAmountEstimated: boolean
    totalTaxAmount: IMoney|null
    totalTaxAmountEstimated: boolean
  }
  discountAllocations: {
    discountedAmount: IMoney[]
  }
  discountCodes: Array<{
    applicable: boolean
    code: string
  }>
  id: string
  totalQuantity: number
  lines: {
    cost: {
      amountPerQuantity: IMoney
      compareAtAmountPerQuantity: IMoney
      subtotalAmount: IMoney
      totalAmount: IMoney
    }
    discountAllocations: {
      discountedAmount: IMoney
    }
    id: string
    merchandise: IProductVariant
    quantity: number
  }[]
}