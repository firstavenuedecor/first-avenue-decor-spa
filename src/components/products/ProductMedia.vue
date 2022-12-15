<template lang="pug">
.product-media MEMEELRJR
</template>
  
  <script lang="ts">
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