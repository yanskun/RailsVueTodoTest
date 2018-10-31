<template>
  <div>
    <ul>
      <h3>A</h3>
      <li v-for="AAA in tasks" v-if="AAA.state === 1">
        <a>{{ AAA.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTasks } from '../../query/getTasks';

export default {
  // components: {
  //   draggable,
  // },
  apollo: {
    tasks: {
      query: getTasks
    }
  }
}

</script>

<style scoped>

ul {
  margin: 50px;
  width: 200px;
  border: solid 1px;
}

</style>
