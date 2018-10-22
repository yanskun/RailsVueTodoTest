<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
// draggable
import draggable from 'vuedraggable';

export default {
  name: 'app',
  components: {
    draggable,
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
