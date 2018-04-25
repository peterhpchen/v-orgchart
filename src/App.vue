<template>
  <div id="app">
    <!-- <v-orgchart
      :data="data"
    >
    </v-orgchart> -->
    <v-layer
      :node-data="data"
    >
      <template
        slot-scope="slotProps"
      >
        <div class="name">{{slotProps.nodeData.name}}</div>
      </template>
    </v-layer>
    <!-- <v-node
      :node-data="data"
    >
      <template
        slot-scope="slotProps"
      >
        <div class="name">{{slotProps.nodeData.name}}</div>
        <div class="name">{{slotProps.nodeData.id}}</div>
      </template>
    </v-node> -->
  </div>
</template>

<script>
import VOrgchart from './components/VOrgchart';
import VLayer from './components/VLayer';
import VNode from './components/VNode';

export default {
  name: 'App',
  components: {
    VOrgchart,
    VLayer,
    VNode,
  },
  data() {
    return {
      data: {
        name: 'parent',
        id: 1,
        children: [
          {
            name: 'child1',
            id: 11,
            children: [
              {
                name: 'child11',
                id: 111,
              },
            ],
          },
          {
            name: 'child2',
            id: 12,
          },
          {
            name: 'child3',
            id: 13,
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>
