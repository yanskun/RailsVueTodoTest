<template>
  <div>
    <ul>
      <h3>A</h3>
      <li v-for="A in tasks" v-if="A.state === 1">
        <a @click="deleteTask">[x]</a>
        <a>{{ A.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTasks } from '../../query/getTasks';
import { dereateTask } from '../../query/deleateTask';
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
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
