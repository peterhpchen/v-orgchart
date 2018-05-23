<template lang="pug">
  div.vue-icon
    div.triangle.large
    div.triangle.middle
    div.triangle.short
</template>

<script>
export default {
  name: 'VLoader',
};
</script>

<style lang="postcss" scoped>
:root {
  --large-v-color: #41b883;
  --middle-v-color: #35495e;
  --short-v-color: #ffffff;
}

.vue-icon {
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 90px;
  height: 77.9px;

  & > .large {
    position: absolute;
    transform-origin: 45px 26px;
    animation: clockwise 3s infinite alternate;
    border-top: 77.9px solid var(--large-v-color);
    border-left: 45px solid transparent;
    border-right: 45px solid transparent;
  }

  & > .middle {
    position: absolute;
    transform-origin: 35px 20.2px;
    animation: anti-clockwise 3s infinite alternate;
    border-top: 60.6px solid var(--middle-v-color);
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    left: 10px;
    top: 5px;
  }

  & > .short {
    position: absolute;
    transform-origin: 25px 14.4px;
    animation: clockwise 3s infinite alternate;
    border-top: 43.3px solid var(--short-v-color);
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    left: 20px;
    top: 10px;
  }
}

@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes anti-clockwise {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
