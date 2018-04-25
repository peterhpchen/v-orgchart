<template>
  <table class="v-layer">
    <tr>
      <td>
        <v-node
          :node-data="nodeData"
        >
          <template
            slot-scope="props"
          >
            <slot
              :node-data="props.nodeData"
            />
          </template>
        </v-node>
      </td>
    </tr>
    <tr class="nodes">
      <td
        v-for="(node, index) in nodeData.children"
        :key="key(node, index)"
      >
        <v-layer
          :node-data="node"
        >
          <template
            slot-scope="_"
          >
            <slot
              :node-data="_.nodeData"
            />
          </template>
        </v-layer>
      </td>
    </tr>
  </table>
</template>

<script>
import VNode from './VNode';

export default {
  name: 'v-layer',
  components: {
    VNode,
  },
  props: {
    nodeData: {
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

