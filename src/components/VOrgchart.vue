<template>
  <div class="v-orgchart">
    <v-layer
      :node-data="data"
    >
      <slot/>
    </v-layer>
  </div>
</template>

<script>
import VLayer from './VLayer';

export default {
  name: 'v-orgchart',
  components: {
    VLayer,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    key(node, index) {
      return node.id || index;
    },
  },
};
</script>

<style lang="postcss" scoped>

</style>
