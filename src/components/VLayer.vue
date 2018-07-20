<template lang="pug">
  table.v-layer
    tr
      td(
          :colspan="layerColspan"
      )
        v-node(
          :data="data"
          :direction="direction"
        )
          template(slot-scope="_")
            slot(:data="_.data")
    template(v-if="isHaveChild")
      tr.lines
        td(
          :colspan="layerColspan"
        )
          div.downLine
      tr.lines
        td(
          v-for="n in data.children.length * 2"
          :key="n"
          :class="lineClassObject(n)"
        )
      tr.nodes
        td(
          v-for="(node, index) in data.children"
          colspan="2"
          :key='key(node, index)'
        )
          v-layer(
            :data="node"
            :direction="direction"
          )
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
    direction: {
      type: String,
      default: 't2b',
    },
  },
  computed: {
    isHaveChild() {
      return this.data.children && this.data.children.length > 0;
    },
    layerColspan() {
      return this.isHaveChild ? this.data.children.length * 2 : false;
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
:root {
  --line-color: #8799a2;
  --line-height: 20px;
  --line-width: 2px;
}

table {
  border-spacing: 0;
  margin: auto;
}

td {
  text-align: center;
  vertical-align: top;
  padding: 0;
}

.downLine {
  background-color: var(--line-color);
  margin: 0 auto;
  height: var(--line-height);
  width: var(--line-width);
  float: none;
}

.topLine {
  border-top: var(--line-width) solid var(--line-color);
  height: var(--line-height);
}

.rightLine {
  border-right: calc(var(--line-width) / 2) solid var(--line-color);
  height: var(--line-height);
  float: none;
  border-radius: 0;
}

.leftLine {
  border-left: calc(var(--line-width) / 2) solid var(--line-color);
  height: var(--line-height);
  float: none;
  border-radius: 0;
}
</style>
