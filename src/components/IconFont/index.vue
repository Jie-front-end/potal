<template>
  <i
    :class="iconClass"
    :style="{ fontSize: `${size}px`, color }"
  />
</template>
<script>
export default {
  props: {
    icon: String,
    size: [Number, String],
    color: String
  },
  computed: {
    iconClass () {
      return ['iconfont', this.icon]
    }
  }
}
</script>
