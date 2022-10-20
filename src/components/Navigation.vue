<template>
  <nav>
    <div class="container nav-container">
      <ul class="level-1">
        <li v-for="item1 in mainMenuItems">
          <a :href="item1.url">{{ item1.title }}</a>

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
      mainMenuItems: $menu.value[MENU.MainMenu].items
    }
  }
}
</script>

<style lang="scss">
	nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.nav-container {

	}
</style>