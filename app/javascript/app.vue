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
    <form @submit.prevent>
      <input type="text" v-model="newTodo" placeholder="Enter your new task">
      <button @click="addTodo">add</button>
    </form>
    </ul>
    <ul>
      <h2>Progress Tasks</h2>
      <draggable :options="{group:'ITEMS'}">
        <li v-for="(wtodo, index) in wtodos">
          <a>{{ wtodo }}</a>
          <a @click="deleatTodo(index)">[x]</a>
        </li>
      </draggable>
    <form @submit.prevent>
      <input type="text" v-model="newwTodo" placeholder="Enter your new task">
      <button @click="addwTodo">add</button>
    </form>
    </ul>
    <ul>
      <h2>Finish Tasks</h2>
      <draggable :options="{group:'ITEMS'}">
        <li v-for="(ftodo, index) in ftodos">
          <a>{{ ftodo }}</a>
          <a @click="deleatTodo(index)">[x]</a>
        </li>
      </draggable>
    <form @submit.prevent>
      <input type="text" v-model="newfTodo" placeholder="Enter your new task">
      <button @click="addfTodo">add</button>
    </form>
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
      addwTodo: function() {
        this.wtodos.push(this.newwTodo);
        this.newwTodo = '';
      },
      addfTodo: function() {
        this.ftodos.push(this.newfTodo);
        this.newfTodo = '' ;
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
li {
  width: 200px;
  border: solid 1px;
  margin-bottom: 5px;
}

ul {
  width: 300px;
  margin-top: 10px;
  margin-left: 10px;
  float: left;
  list-style: none;
  border: solid 1px;
}

li:hover {
  background-color: #eeeeee;
}

</style>
