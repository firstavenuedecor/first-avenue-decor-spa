<template lang="pug">
.product-purchase-area
  .vendor {{ product.vendor }}
  .title {{ product.title }}
  .price-container
    ProductPrice(:product="product")
  template(v-if="product.availableForSale")
    .qty
      VInput(v-model="qty") Quantity
    .add-to-cart
      VButton(@click="addToCart") Add to Cart
</template>

<script lang="ts">
import { useStore } from '@nanostores/vue'
import { cart } from '../../store/cart'

import ProductPrice from './ProductPrice.vue'
import VInput from '../forms/Input.vue'
import VButton from '../elements/Button.vue'

import type { PropType } from 'vue'
import type { IProduct } from '../../types'

export default {
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },

  components: {
    ProductPrice,
    VInput,
    VButton,
  },

  data() {
    return {
      qty: 1,
    }
  },

  computed: {

  },

  methods: {
    addToCart() {
      console.log('add to cart')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>