<script>
export default {
  props: ["delay"],
};
</script>

<template>
  <div class="block">Click Me</div>
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
