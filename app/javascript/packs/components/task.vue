<template>
  <div id="app" class="container">
    <ul>
      <!-- タイトル -->
      <h2>Your Tasks</h2>
      <!-- ドラック追加 -->
      <form @submit.prevent>
        <input type="text" v-model="newTodo" placeholder="Enter your new task...">
        <button @click="addTodo">add</button>
      </form>
      <draggable class="drag" :list="todos" :options="{group:'ITEMS'}">
        <li v-for="(todo, index) in todos">
          <a class="face"><span class="finish" @click="deleteTodo(index)">&nbsp;😂｜</span><span class="yet">&nbsp;😇｜</span></a>
          <a>{{ todo }}</a>
        </li>
      </draggable>
    </ul>
    <ul>
      <h2>Progress Tasks</h2>
      <form @submit.prevent>
        <input type="text" v-model="newwTodo" placeholder="Enter your new task...">
        <button @click="addwTodo">add</button>
      </form>
      <draggable class="drag" :list="wtodos" :options="{group:'ITEMS'}">
        <li v-for="(wtodo, index) in wtodos">
          <a class="face"><span class="finish" @click="deletewTodo(index)">&nbsp;😂｜</span><span class="yet">&nbsp;😇｜</span></a>
          <a>{{ wtodo }}</a>
        </li>
      </draggable>
    </ul>
    <ul>
      <h2>Finish Tasks</h2>
      <form @submit.prevent>
        <input type="text" v-model="newfTodo" placeholder="Enter your new task...">
        <button @click="addfTodo">add</button>
      </form>
      <draggable class="drag" :list="ftodos" :options="{group:'ITEMS'}">
        <li v-for="(ftodo, index) in ftodos">
          <a class="face"><span class="finish" @click="deletefTodo(index)">&nbsp;😂｜</span><span class="yet">&nbsp;😇｜</span></a>
          <a>{{ ftodo }}</a>
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
      newwTodo: '',
      newfTodo: '',
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
        this.todos.unshift(this.newTodo);
        this.newTodo = '';
      },
      addwTodo: function() {
        this.wtodos.unshift(this.newwTodo);
        this.newwTodo = '';
      },
      addfTodo: function() {
        this.ftodos.unshift(this.newfTodo);
        this.newfTodo = '' ;
      },
      deleteTodo: function(index) {
        if (confirm('Are you sure?')) {
          this.todos.splice(index, 1)
        }
      },
      deletewTodo: function(index) {
        if (confirm('Are you sure?')) {
          this.wtodos.splice(index, 1)
        }
      },
      deletefTodo: function(index) {
        if (confirm('Are you sure?')) {
          this.ftodos.splice(index, 1)
        }
      }
    },

  }
</script>

<style scoped>
li {
  width: 200px;
  border: solid 1px;
  margin-bottom: 5px;
  cursor: move;
  padding: 5px 0;
}

ul {
  width: 300px;
  margin-top: 10px;
  margin-left: 10px;
  float: left;
  list-style: none;
  border: solid 1px;
}

/* 空のレーンにコンテンツを入れられるようにする */
/* レーンの縦サイズが０になってしまうと、コンテンツを入れるスペースがない認識をされてしまう */
/* その為、最初から余白を設定しておく。 */
.drag {
  margin-bottom: 100px;
  min-height: 100px;
}

li:hover {
  background-color: #eeeeee;
}

form {
  padding-bottom: 10px;
}

.face {
  padding-left: 5px;
}

a.face span.yet{
  display:inline;
}
a.face:hover span.yet{
  display:none;
}
a.face span.finish{
  display:none;
}
a.face:hover span.finish{
  display:inline;
  cursor: pointer;
}

</style>
