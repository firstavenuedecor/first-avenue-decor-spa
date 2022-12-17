<template lang="pug">
.product-purchase-area
  .vendor {{ product.vendor }}
  .title {{ product.title }}
  .price-container
    ProductPrice(:product="product")
  .options-container
    ProductOptions(:product="product" :selected-variant="selectedVariant" @change="(v) => selectedVariant = v")
  template(v-if="product.availableForSale")
    .qty
      VInput(v-model="qty") Quantity
    .above-add-to-cart(v-if="product.metafields['slots.above_add_to_cart']") {{ product.metafields['slots.above_add_to_cart'].value }}
    .add-to-cart
      VButton(@click="addToCart") Add to Cart
    .shipping-details(v-if="product.metafields['shipping.details']") {{ product.metafields['shipping.details'].value }}
</template>

<script lang="ts">
import { cartAdd } from '../../store/cart'

import ProductPrice from './ProductPrice.vue'
import ProductOptions from './ProductOptions.vue'
import VInput from '../forms/Input.vue'
import VButton from '../elements/Button.vue'

import type { PropType } from 'vue'
import type { IProduct, IProductVariant } from '../../types'

export default {
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },

  components: {
    ProductPrice,
    ProductOptions,
    VInput,
    VButton,
  },

  data() {
    return {
      qty: 1 as number,
      selectedVariant: this.product.variants[0] as IProductVariant,
    }
  },

  computed: {

  },

  methods: {
    async addToCart() {
      await cartAdd(this.product.variants[0].id, this.qty)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>