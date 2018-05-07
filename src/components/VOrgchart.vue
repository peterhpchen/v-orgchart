<template lang="pug">
  div.v-orgchart
    v-layer(:data="data")
      template(slot-scope="_")
        slot(:data="_.data")
          div.name {{ _.data.name }}
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
</style>
