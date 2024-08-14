<template>
  <div class="progress-bar" :class="progressBarColorClass">
    <span class="progress-bar__title">
      {{ title }}
    </span>

    <span class="progress-bar__fullness">{{ max }} / {{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'OrderProgressBar',
  props: {
    title: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: Number,
    },
    max: {
      required: true,
      type: Number,
    },
  },
  computed: {
    progressBarColorClass() {
      if (this.value == this.max) {
        return 'positive'
      }

      if (this.value < this.max / 2) {
        return 'negative'
      }

      return ''
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'src/css/quasar.variables.scss';

.progress-bar {
  border-radius: 10px;
  border: 1px solid $primary;
  color: $primary;
  min-height: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  &.positive {
    border: 1px solid $positive;
    color: $positive;
  }

  &.negative {
    border: 1px solid $negative;
    color: $negative;
  }
}

.progress-bar__title,
.progress-bar__fullness {
  padding: 0 10px;
}
</style>
