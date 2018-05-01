<template>
  <div class="node">
    <slot
      :data="data"
    />
  </div>
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

<style>

</style>
