<template>
  <div id="app">
    <v-orgchart
      :data.sync="data"
    >
      <template
        slot-scope="slotProps"
      >
        <div class="title">{{ slotProps.data.id }}</div>
        <div
          class="content"
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
      data: new Promise((resolve) => {
        setTimeout(() => {
          resolve({
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
          });
        }, 1000);
      }),
    };
  },
  methods: {
    clickName(name) {
      console.log(`click ${name}`); // eslint-disable-line
    },
  },
};
</script>

<style lang="postcss" scoped>
.title {
  background-color: #35495e;
  color: #ffffff;
}

.content {
  background-color: #41b883;
  color: #ffffff;
}
</style>
