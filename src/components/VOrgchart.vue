<template lang="pug">
  div.v-orgchart
    v-layer(:data="data")
      template(slot-scope="_")
        slot(:data="_.data")
          div.title {{ _.data.id }}
          div.content {{ _.data.name }}
</template>

<script>
import VLayer from './VLayer';

export default {
  name: 'VOrgchart',
  components: {
    VLayer,
  },
  props: {
    data: {
      type: Object,
      required: true,
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

.title {
  color: var(--string-color);
  background-color: var(--title-background-color);
}

.content {
  color: var(--string-color);
  background-color: var(--content-background-color);
}
</style>
