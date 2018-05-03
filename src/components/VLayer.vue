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
    <template
      v-if="isHaveChild"
    >
      <tr
        class="lines"
      >
        <td>
          <div class="downLine"/>
        </td>
      </tr>
      <tr
        class="lines"
      >
        <td
          v-for="n in data.children.length * 2"
          :key="n"
          :class="line(n)"
        />
      </tr>
      <tr
        class="nodes"
      >
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
    </template>
  </table>
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
    line(number) {
      return {
        rightLine: !this.isEven(number),
        leftLine: this.isEven(number),
      };
    },
    isEven(number){
      return number % 2 === 0;
    }
  },
};
</script>

<style lang="postcss" scoped>

</style>

