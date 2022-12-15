<template lang="pug">
.input-container
  label(
    v-if="$slots.default"
    :for="id"
  )
    slot
  input(
    :id="id"
    :type="type"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
  )
</template>
    
<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {
    label: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    modelValue: {
      type: [String, Number] as PropType<string|number>,
      required: true,
    },
    type: {
      type: String as PropType<string>,
      required: false,
      default: 'text',
    },
    id: {
      type: String as PropType<string>,
      required: false,
      default: 'input_' + (Math.random() + 1).toString(36).substring(7),
    },
    placeholder: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  components: {
  },

  data() {
    return {

    }
  },

  computed: {

  },

  methods: {
    updateInput(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        this.$emit('update:modelValue', Number(event.target.value))
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>