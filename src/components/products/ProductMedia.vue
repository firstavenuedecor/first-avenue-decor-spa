<template lang="pug">
.product-media
  .thumbnails
    .thumbnail(
      v-for="(image, i) in product.images"
      @click="selectImage(i)"
    )
      img(:src="resizeShopifyImage(image.url, 100)" :alt="image.altText")
  .media-container
    template(v-for="(image, i) in product.images")
      img(
        v-if="i === 0 || imagesLoaded"
        :src="resizeShopifyImage(image.url, 500)"
        :alt="image.altText"
        v-show="selectedImageIndex === i"
      )
</template>

<script lang="ts">
import resizeShopifyImage from '../../helpers/resize-shopify-image'

import type { PropType } from 'vue'
import type { IProduct } from '../../types'

export default {
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },

  data() {
    return {
      selectedImageIndex: 0,
      imagesLoaded: false,
    }
  },

  computed: {

  },

  mounted() {
    // window.requestIdleCallback(this.loadImages.bind(this))
  },

  methods: {
    resizeShopifyImage,

    selectImage(i: number) {
      this.selectedImageIndex = i
      this.loadImages()
    },

    loadImages() {
      if (!this.imagesLoaded) {
        this.imagesLoaded = true
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.product-media {
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 16px;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.thumbnail {
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

.media-container {
  img {
    object-fit: contain;
  }
}
</style>