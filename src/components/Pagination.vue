<template lang="pug">
.pagination
  a.prev(v-if="pageInfo.hasPreviousPage" :href="prevHref") Prev
  a.next(v-if="pageInfo.hasNextPage" :href="nextHref") Next
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { IPageInfo } from '../types'

export default {
  props: {
    pageInfo: {
      type: Object as PropType<IPageInfo>,
      required: true,
    },
    handle: {
      type: String as PropType<string>,
      required: true,
    },
    searchParams: {
      type: Object as PropType<URLSearchParams>,
      required: true,
    }
  },

  data() {
    return {

    }
  },

  computed: {
    prevHref(): string {
      const params = Object.assign(this.searchParams)
      params.set('before', this.pageInfo.startCursor)
      params.delete('after')
      
      return `/collections/${this.handle}?${params.toString()}`
    },

    nextHref(): string {
      const params = Object.assign(this.searchParams)
      params.set('after', this.pageInfo.endCursor)
      params.delete('before')
      
      return `/collections/${this.handle}?${params.toString()}`
    },
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>