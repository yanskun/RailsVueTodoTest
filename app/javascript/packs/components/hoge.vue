<template>
  <div>
    <form @submit.prevent>
      <input type="text" v-model="newTask">
      <button @click="add">AddTask</button>
    </form>
    <ul>
      <h3>A</h3>
      <draggable :options="{group:'ITEMS'}">
        <li v-for="A in tasks" v-if="A.state === 1">
          <!-- メソッドに、何のデータを取得するのかを明示する -->
          <a @click="del(A.id)">[ｘ]</a>
          <a>{{ A.name }}</a>
        </li>
      </draggable>
    </ul>
    <ul>
      <h3>A</h3>
      <draggable :options="{group:'ITEMS'}">
        <li v-for="A in tasks" v-if="A.state === 2">
          <!-- メソッドに、何のデータを取得するのかを明示する -->
          <a @click="del(A.id)">[ｘ]</a>
          <a>{{ A.name }}</a>
        </li>
      </draggable>
    </ul>
    <ul>
      <h3>A</h3>
      <draggable :options="{group:'ITEMS'}">
        <li v-for="A in tasks" v-if="A.state === 3">
          <!-- メソッドに、何のデータを取得するのかを明示する -->
          <a @click="del(A.id)">[ｘ]</a>
          <a>{{ A.name }}</a>
        </li>
      </draggable>
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
      // ちゃんとsubmitから名前を受け取れてるかの確認
      console.log(this.newTask);
      this.$apollo.mutate({
        mutation: CREATE_TASK,
        variables: {
          task:{
            name: this.newTask,
            // stateを指定しているので、複製が必要
            state: 1
          }
        }
      }),
      this.newTask = "";
    },

    del : function(id) {
      console.log(id);
      if (confirm('Are you sure???')){
        this.$apollo.mutate({
          mutation: DELETE_TASK,
          variables: {
            id: parseInt(id)
          }
        })
      }
    }
  }
}

</script>

<style scoped>

ul {
  margin: 50px;
  width: 250px;
  border: solid 1px;
  float: left;
}

li {
  list-style: none;
  margin: 10px auto;
}

form {
  margin: 50px 0 0 50px;
  border-bottom: solid 1px;
  width: 300px;
  padding: 10px;
}

</style>
