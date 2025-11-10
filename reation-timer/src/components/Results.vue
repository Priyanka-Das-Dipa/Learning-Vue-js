<template>
  <p class="time">Reaction time {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Pro";
    } else if (this.score < 400) {
      this.rank = "Average";
    } else {
      this.rank = "Beginner";
    }
  },
};
</script>

<style>
.time{
    text-align: center;
}
.rank {
    display: flex;
    justify-content: center;

  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(134, 48, 171);
}
</style>
