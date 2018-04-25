<template>
  <div class="v-orgchart">
    <v-layer
      :node-data="data"
    >
      <template
        slot-scope="props"
      >
        <slot
          :node-data="props.nodeData"
        >
          <div class="name">{{props.nodeData.name}}</div>
        </slot>
      </template>
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
