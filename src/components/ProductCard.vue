<template lang="pug">
a.product-card(:href="'/products/' + product.handle")
  .image-container
    .image(:class="{ 'has-secondary-image': product.images.nodes[1] }")
      img.featured-image(:src="resizeImage(product.images.nodes[0].url)")
      img.secondary-image(v-if="product.images.nodes[1]" :src="resizeImage(product.images.nodes[1].url)")
      .chip(v-if="isOnSale")
        .is-on-sale(v-if="isOnSale") Sale
  .vendor {{ product.vendor }}
  .title {{ product.title }}
  ProductPrice(:product="product")
</template>

<script lang="ts">
import resizeShopifyImage from '../helpers/resize-shopify-image'
import ProductPrice from './products/ProductPrice.vue'

import type { PropType } from 'vue'
import type { ICollectionProduct } from '../types'

export default {
  props: {
    product: {
      type: Object as PropType<ICollectionProduct>,
      required: true,
    },
  },

  components: {
    ProductPrice,
    Image,
  },

  data() {
    return {

    }
  },

  computed: {
    isOnSale(): boolean {
      return this.product.compareAtPriceRange.minVariantPrice.amount != '0.0'
    },
  },

  methods: {
    resizeImage(src: string): string {
      return resizeShopifyImage(src, 300, '', false)
    },
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  display: block;

  &:hover {
    text-decoration: none;

    .title {
      text-decoration: underline;
    }
  }
}

.image-container {
  padding: 8px;
  border: 1px solid var(--color-gray-x-light);
  margin-bottom: 12px;
}

.image {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &.has-secondary-image:hover {
    .featured-image {
      opacity: 0;
    }

    .secondary-image {
      opacity: 1;
    }
  }

  img {
    transition: opacity 300ms ease-in-out;
    display: block;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .secondary-image {
    opacity: 0;
  }

  .chip {
    position: absolute;
    top: 5px;
    left: 5px;

    & > * {
      margin-right: 4px;
      display: inline-block;
      background: var(--color-gray-dark);
      padding: 4px 6px;
      line-height: 1;
      border-radius: 4px;
      color: white;
      font-size: .8em;
    }
  }
}

.vendor {
  text-transform: uppercase;
  font-size: .8rem;
  margin-bottom: 6px;
}

.title {
  margin-bottom: 6px;
}
</style>