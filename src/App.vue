<template>
  <div id="app">
    <v-orgchart
      :data="data"
    >
      <template
        slot-scope="slotProps"
      >
        <div class="name">{{ slotProps.data.id }}</div>
        <div
          class="name"
          @click="clickName(slotProps.data.name)">
          {{ slotProps.data.name }}
        </div>
      </template>
    </v-orgchart>
  </div>
</template>

<script>
import VOrgchart from './components/VOrgchart';

export default {
  name: 'App',
  components: {
    VOrgchart,
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
  methods: {
    clickName(name) {
      console.log(`click ${name}`);
    },
  },
};
</script>

<style>
</style>
