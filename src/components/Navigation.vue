<template>
  <nav>
    <div class="container nav-container">
      <ul class="level-1">
        <li v-for="item1 in mainMenuItems">
          <a :href="cleanUrl(item1.url)" class="level-1-link" :class="{ 'has-sub-items':  item1.items?.length }">{{ item1.title }}</a>

          <ul v-if="item1.items?.length" class="level-2">
            <li v-for="item2 in item1.items">
              <a :href="item2.url">{{ item2.title }}</a>

              <ul v-if="item2.items?.length" class="level-3">
                <li v-for="item3 in item2.items">
                  <a :href="item3.url">{{ item3.title }}</a>
                </li>
              </ul>

            </li>
          </ul>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from '@nanostores/vue'
import { menu, MENU } from '../store/menu'

const $menu = useStore(menu)

export default {
  data() {
    return {
      mainMenuItems: $menu.value[MENU.MainMenu].items,
      level2Show: {},
    }
  },

  methods: {
    cleanUrl(url: string): string {
      return url.split('.com')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
	nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
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

  li {
    display: inline-block;
    padding: 8px 8px;
    position: relative;

    &:hover > ul {
      display: flex;
    }
  }

  a {

  }

  .level-1 {
    display: flex;
    flex-wrap: nowrap;
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

  .level-2 {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -50%;
    padding: 8px;
    border: 1px solid var(--color-primary);
  }
</style>