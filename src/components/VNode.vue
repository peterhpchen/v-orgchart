<template lang="pug">
  div.node
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
  },
};
</script>

<style lang="postcss" scoped>
.node {
  display: inline-block;
  padding: 3px;
  width: 130px;
}
</style>
