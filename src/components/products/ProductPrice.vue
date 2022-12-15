<template lang="pug">
.prices
  .from(v-if="hasPriceRange") From
  .price(:class="{ 'strikethrough': isOnSale }") {{ formatPrice(product.priceRange.minVariantPrice.amount) }}
  .sale-price(v-if="isOnSale") {{ formatPrice(product.compareAtPriceRange.minVariantPrice.amount) }}
</template>

<script lang="ts">
import formatPrice from '../../helpers/format-price'

import type { PropType } from 'vue'
import type { IProduct, ICollectionProduct } from '../../types'

export default {
  props: {
    product: {
      type: Object as PropType<IProduct>|PropType<ICollectionProduct>,
      required: true,
    },
  },

  data() {
    return {

    }
  },

  computed: {
    hasPriceRange(): boolean {
      return this.product.priceRange.minVariantPrice.amount != this.product.priceRange.maxVariantPrice.amount
    },

    isOnSale(): boolean {
      return this.product.compareAtPriceRange.minVariantPrice.amount != '0.0'
    },
  },

  methods: {
    formatPrice,
  }
}
</script>

<style lang="scss" scoped>
.prices {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .sale-price, .price, .from {
    font-size: 1.1rem;
  }

  .from {
    margin-right: 4px;
  }

  .price {
    margin-right: 8px;

    &.strikethrough {
      color: var(--color-gray);
      text-decoration: line-through;
    }
  }
}
</style>