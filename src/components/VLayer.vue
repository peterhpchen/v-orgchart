<template lang="pug">
  table.v-layer
    tr
      td
        v-node(:data="data")
          template(slot-scope="_")
            slot(:data="_.data")
    template(v-if="isHaveChild")
      tr.lines
        td
          div.downLine
      tr.lines
        td(v-for="n in data.children.length * 2", :key="n", :class="lineClassObject(n)")
      tr.nodes
        td(v-for="(node, index) in data.children")
          v-layer(:data="node")
            template(slot-scope="_")
              slot(:data="_.data")
</template>

<script>
import VNode from './VNode';

export default {
  name: 'VLayer',
  components: {
    VNode,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isHaveChild() {
      return this.data.children && this.data.children.length > 0;
    },
  },
  methods: {
    key(node, index) {
      return node.id || index;
    },
    lineClassObject(number) {
      return {
        topLine: number !== 1 && number !== this.data.children.length * 2,
        rightLine: !this.isEven(number),
        leftLine: this.isEven(number),
      };
    },
    isEven(number) {
      return number % 2 === 0;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
