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
    { path: '/', component: Task, headerTitle: 'tasks' },
    { path: '/about', component: About, headerTitle: 'about' },
  ],
})

export default router;

router.afterEach((to,from) =>{
  console.log('ページが変わったよ！');
})
