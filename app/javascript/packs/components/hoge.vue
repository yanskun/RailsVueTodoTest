<template>
  <div>
    <ul>
      <h3>A</h3>
      <form @submit.prevent>
        <input type="text" v-model="newTask">
        <button @click="add">Add</button>
      </form>
      <li v-for="A in tasks" v-if="A.state === 1">
        <a @click="del">[{{ A.id }}]</a>
        <a>{{ A.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTasks } from '../../query/getTasks';
import { DELETE_TASK } from '../../query/deleteTask';
import { CREATE_TASK } from '../../query/createTask';
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  apollo: {
    tasks: {
      query: getTasks
    }
  },
  data () {
    return {
      newTask : "",
    }
  },
  methods: {
    add :function() {
      console.log(this.newTask);
      this.$apollo.mutate({
        mutation: CREATE_TASK,
        variables: {
          task:{
            name: this.newTask,
            state: 1
          }
        }
      }),
      this.newTask = "";
    },
    del : function() {
      console.log(this.tasks.id);
      this.$apollo.mutate({
        mutation: DELETE_TASK,
        variables: {
          id: this.A.id
        }
      })
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
