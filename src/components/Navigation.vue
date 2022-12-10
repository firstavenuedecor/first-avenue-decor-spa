<template lang="pug">
nav
  .container.nav-container
    ul.level-1
      li(v-for="item1 in mainMenuItems" :id="'nav-' + item1.title.replace(/ /g, '-')")
        a.level-1-link(
          :href="cleanUrl(item1.url)"
          :class="{ 'has-sub-items':  item1.items?.length }"
        ) {{ item1.title }}

        .level-2(v-if="item1.items?.length")
          ul
            li(v-for="item2 in item1.items")
              a.level-2-link(:href="cleanUrl(item2.url)") {{ item2.title }}

              ul.level-3(v-if="item2.items?.length")
                li(v-for="item3 in item2.items")
                  a(:href="cleanUrl(item3.url)") {{ item3.title }}
            li.level-2-image(v-if="item1.image")
              img(:src="resizeShopifyImage(item1.image.url, null, 350)" :alt="item1.image.altText")
</template>

<script lang="ts">
import { useStore } from '@nanostores/vue'
import { menu, MENU } from '../store/menu'
import resizeShopifyImage from '../helpers/resize-shopify-image'

const $menu = useStore(menu)

export default {
  data() {
    return {
      mainMenuItems: $menu.value[MENU.MainMenu].items,
      level2Show: {},
    }
  },

  methods: {
    resizeShopifyImage,

    cleanUrl(url: string): string {
      return url.split('.com')[1]
    },
  },
}
</script>

<style lang="scss" scoped>
	nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
    position: relative;
	}

	.nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
	}

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .level-1 {
    display: flex;
    flex-wrap: nowrap;

    > li {
      display: inline-block;
      padding: 8px 8px;

      &:hover > .level-2 {
        display: flex;
      }
    }

    .level-1-link {
      &.has-sub-items:after {
        content: ' ';
        display: inline-block;
        background-image: url(/icons/arrow-down.svg);
        background-repeat: no-repeat;
        background-size: contain;
        width: 8px;
        height: 8px;
        margin-left: 5px;
      }
    }
  }

  .level-2 {
    display: none;
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 16px;
    border: 1px solid var(--color-primary);
    z-index: 1;
    background-color: white;

    > ul {
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: stretch;
      gap: 8px;
      // height: 400px;
      max-height: 40vh;

      > li {
        page-break-inside: avoid;
        break-inside: avoid;
        max-width: 200px;

        > a {
          display: block;
          margin-bottom: 8px;
        }
      }

      @media (min-width: 1000px) {
        max-height: 60vh;
      }
    }

    .level-2-link {
      font-weight: bold;
    }

    .level-2-image {
      max-width: none;
      display: none;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      @media (min-width: 1000px) {
        display: block;
      }
    }
  }

  .level-3 {
    > li {
      > a {
        display: block;
        margin-bottom: 8px;
      }
    }
  }
</style>