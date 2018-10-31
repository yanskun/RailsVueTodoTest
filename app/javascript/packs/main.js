/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// 元の名前は「hello_vue.js」

import Vue from 'vue'
import Router from './router/index'
import App from '../app.vue'

// 10/29コメントアウト
// // apollo
// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import VueApollo from 'vue-apollo'
// import gql from 'graphql-tag'
//
// const httpLink = new HttpLink({
//   // You should use an absolute URL here
//   uri: 'http://localhost:3000/graphql',
// })
//
// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
//   connectToDevTools: true,
// })
//
// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })
//
// // Install the vue plugin
// Vue.use(VueApollo)


// // bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)




// これよくわかんない
// index.html.erb内の<div id="app"にマウントされるらしい>
// index.html.erbのstyle sheetの指定がおかしいと怒られる
var app = new Vue({
  el: '#app',
  router: Router,
  // apolloで追加分
  // 10/29コメントアウト
  // provide: apolloProvider.provide(),
  components: {
    'navbar': App,
   }
  // template: '<App/>'
})




// 最初からいたけど、不要なのでコメントアウト
// 消すとエラーになるの謎
// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.body.appendChild(document.createElement('hello'))
//   const app = new Vue({
//     el,
//     render: h => h(App)
//   })
//
//   console.log(app)
// })


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
