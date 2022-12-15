<template lang="pug">
button(@click="onClick")
  slot
</template>
    
<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {

  },

  emits: ['click'],

  components: {
  },

  data() {
    return {

    }
  },

  computed: {

  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>