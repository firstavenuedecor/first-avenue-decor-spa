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
    this.loading = false
    console.log('mount2', this.cart)
  },

  data() {
    return {
      loading: true,
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