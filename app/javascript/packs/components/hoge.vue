<template>
  <div>
    <p>{{ testHello }}</p>
    <p>{{ testGoodbey }}</p>
    <p>{{ taskAll }}</p>
    <ul>
      <input type="text" v-model="Task">
      <button @click="createTask">add</button>
      <li v-for="item in taskAll">
        <a>{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import gql from 'graphql-tag'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql',
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo)

export default {
  provide: apolloProvider.provide(),
  apollo: {
    testHello: gql`query { testHello }`,
    testGoodbey: gql`query { testGoodbey }`,
    taskAll: gql`query { taskAll{ id name }}`,
    createTask: gql`{
      mutation createTask($task:TaskInputType!){
        createTask(task:$task){
          name
        }}`
  },
}

</script>
