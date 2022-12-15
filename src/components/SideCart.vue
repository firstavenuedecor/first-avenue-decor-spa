<template lang="pug">
.side-cart SIDE CART TO HIDE
</template>

<script lang="ts">
import { useStore } from '@nanostores/vue'
import { cart, cartGet } from '../store/cart'

import type { PropType } from 'vue'
import type { IProduct } from '../types'

export default {
  props: {
  },

  components: {

  },

  async beforeMount() {
    await cartGet()
  },

  data() {
    return {
      cart: useStore(cart),
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>