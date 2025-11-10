<script>
import Block from "./components/Block.vue";
export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      (this.isPlaying = true), console.log(this.delay);
    },
  },
};
</script>

<template>
  <h1>Reaction Timer</h1>
  <button @click="start">Play</button>
  <Block v-if="isPlaying" />
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
}
button {
  display: block;
  margin: 2rem auto;
  padding: 0.5rem 4rem;
  font-size: 1.5rem;
}
</style>
