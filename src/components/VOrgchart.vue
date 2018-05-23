<template lang="pug">
  div.v-orgchart-container
    div.loader-container(v-if="loading")
      v-loader
    div.v-orgchart(v-else)
      v-layer(
        :data="nodeData"
      )
        template(slot-scope="_")
          slot(:data="_.data")
            div.title {{ _.data.id }}
            div.content {{ _.data.name }}
</template>

<script>
import VLoader from './VLoader';
import VLayer from './VLayer';

export default {
  name: 'VOrgchart',
  components: {
    VLoader,
    VLayer,
  },
  props: {
    data: {
      type: [Object, Promise],
      required: true,
    },
  },
  data() {
    return {
      nodeData: {},
      loading: false,
    };
  },
  watch: {
    data: {
      immediate: true,
      handler(value) {
        if (!(value instanceof Promise)) {
          this.nodeData = this.data;
          return;
        }

        const self = this;

        self.loading = true;

        value.then((res) => {
          self.nodeData = res;
          self.$emit('update:data', res);

          self.loading = false;
        });
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
:root {
  --string-color: #ffffff;
  --title-background-color: #35495e;
  --content-background-color: #41b883;
}

.loader-container {
  margin: 52px;
}

.title {
  color: var(--string-color);
  background-color: var(--title-background-color);
}

.content {
  color: var(--string-color);
  background-color: var(--content-background-color);
}
</style>
