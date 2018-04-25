<template>
  <div class="node">
      <slot
        :node-data="nodeData"
      >
        <div class="name">{{nodeData.name}}</div>
      </slot>
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
