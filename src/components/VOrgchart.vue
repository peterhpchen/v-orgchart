<template lang="pug">
  div.v-orgchart-container(
    :class="direction"
  )
    div.loader-container(v-if="loading")
      v-loader
    div.v-orgchart(v-else)
      v-layer(
        :data="nodeData"
        :direction="direction"
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
    direction: {
      type: String,
      default: 't2b',
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

.v-orgchart-container {
  &.b2t {
    transform: rotate(180deg);
  }
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
