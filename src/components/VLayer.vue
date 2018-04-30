<template>
  <table class="v-layer">
    <tr>
      <td>
        <v-node
          :data="data"
        >
          <template
            slot-scope="_"
          >
            <slot
              :data="_.data"
            />
          </template>
        </v-node>
      </td>
    </tr>
    <tr class="nodes">
      <td
        v-for="(node, index) in data.children"
        :key="key(node, index)"
      >
        <v-layer
          :data="node"
        >
          <template
            slot-scope="_"
          >
            <slot
              :data="_.data"
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

