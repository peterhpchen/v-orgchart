<template lang="pug">
  div.node(
    :class="direction"
  )
    slot(:data="data")
</template>

<script>
export default {
  name: 'VNode',
  props: {
    data: {
      type: Object,
      required: true,
    },
    direction: {
      type: String,
      default: 't2b',
    },
  },
};
</script>

<style lang="postcss" scoped>
.node {
  display: inline-block;
  padding: 3px;
  width: 130px;

  &.b2t {
    transform: rotate(180deg);
  }
}
</style>
