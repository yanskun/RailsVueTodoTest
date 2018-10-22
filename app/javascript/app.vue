<template>
  <div id="app" class="container">
    <ul>
      <!-- タイトル -->
      <h2>Your Tasks</h2>
      <!-- ドラック追加 -->
      <draggable :options="{group:'ITEMS'}">
        <li v-for="(todo, index) in todos">
          <a>{{ todo }}</a>
          <a @click="deleatTodo(index)">[x]</a>
        </li>
      </draggable>
    </ul>
      <form @submit.prevent>
        <input type="text" v-model="newTodo" placeholder="Enter your new task">
        <button class="btn-add" @click="addTodo">add</button>
      </form>
    <ul>
      <h2>Working Tasks</h2>
      <draggable :options="{group:'ITEMS'}">
        <li v-for="(wtodo, index) in wtodos">
          <a>{{ wtodo }}</a>
          <a @click="deleatTodo(index)">[x]</a>
        </li>
      </draggable>
    </ul>
    <ul>
      <h2>Finish Tasks</h2>
      <draggable :options="{group:'ITEMS'}">
        <li v-for="(ftodo, index) in ftodos">
          <a>{{ ftodo }}</a>
          <a @click="deleatTodo(index)">[x]</a>
        </li>
      </draggable>
    </ul>
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
      newTodo: '',
      todos: [
        'Task01',
        'Task02',
        'Task03',
      ],
      wtodos :[
        'Task11',
        'Task12',
      ],
      ftodos: [
        'Task21',
      ]
    }
  },
    methods: {
      addTodo:  function() {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      },
      deleatTodo: function(index) {
        if (confirm('Are you sure?')) {
          this.todos.splice(index, 1)
        }
      }
    }
  }
</script>

<style scoped>

</style>
