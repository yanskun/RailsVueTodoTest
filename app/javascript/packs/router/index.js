import Vue from 'vue'
// わからんけどこいつもコメントアウト
import VueRouter from 'vue-router'
import Task from '../components/task.vue'
import About from '../components/about.vue'

Vue.use(VueRouter)

// 原因はルーターっぽい？
const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Task, title: 'tasks' },
    { path: '/about', component: About, title: 'about' },
  ],
})

export default router;

router.afterEach((to,from) =>{
  console.log('ページが変わったよ！');
})
