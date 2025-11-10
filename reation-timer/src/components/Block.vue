<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click Me
  </div>
</template>

<style scoped>
.block {
  width: 200px;
  height: 200px;
  border-radius: 16px;
  color: white;
  background-color: rgb(134, 48, 171);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 20px auto;
}
</style>
