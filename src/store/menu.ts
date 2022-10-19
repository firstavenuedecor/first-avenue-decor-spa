import { map, action } from 'nanostores'

export interface IMenuItem {
  title: string
  type: string
  url: string
  items?: IMenuItem[]
}

export interface IMenu {
  handle: string
  title: string
  items: IMenuItem[]
}

export enum MENU {
  MainMenu = 'main-menu',
  Footer = 'footer',
}

export const menu = map<{[key: string]: IMenu}>({})

export const setMenu = action(menu, 'get', async (menu, handle) => {
  const res = await fetch(import.meta.env.PUBLIC_SHOPIFY_API_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: `
      {
        menu(handle: "${handle}") {
          handle
          title
          items {
            items {
              items {
                title
                type
                url
              }
              title
              type
              url
            }
            title
            type
            url
          }
        }
      }  
  `
  }).then(res => {
    if (res.status === 200) {
      return res.json()
    }
    
    return Promise.reject(res)
  }).catch(e => console.error(e))

  menu.setKey(handle, res.data.menu)
})

setMenu(MENU.MainMenu)
setMenu(MENU.Footer)
