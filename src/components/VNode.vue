<template>
  <div class="node">
      <slot
        :node-data="nodeData"
      />
  </div>
</template>

<script>
export default {
  props: {
    nodeData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
