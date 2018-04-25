<template>
  <div class="v-orgchart">
    <v-layer
      :node-data="data"
    >
      <template
        slot-scope="data"
      >
        <slot
          :node-data="data"
        >
          <div>{{nodeData.name}}</div>
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
