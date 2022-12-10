import { map, action } from 'nanostores'
import { shopifyApi } from '../helpers/shopify-api'

import { API_PATH } from '../types'
import type { IMenu } from '../types'

export enum MENU {
  MainMenu = 'main-menu-2',
  Footer = 'footer',
}

export const menu = map<{[key: string]: IMenu}>({})

export const setMenu = action(menu, 'get', async (menu, handle) => {
  const res = await shopifyApi<IMenu>(API_PATH.Menu, `handle=${handle}`, 'with_images')
  menu.setKey(handle, res.data)
})

setMenu(MENU.MainMenu)
setMenu(MENU.Footer)
