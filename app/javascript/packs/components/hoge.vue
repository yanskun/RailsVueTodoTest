<template>
  <div>
    <p>{{ testHello }}</p>
    <p>{{ testGoodbey }}</p>
    <p>{{ taskAll }}</p>
    <ul>
      <h3>A</h3>
      <li v-for="AAA in taskAll" v-if="AAA.state === 1">
        <a>{{AAA.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
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
  components: {
    draggable,
  },
  apollo: {
    testHello: gql`query { testHello }`,
    testGoodbey: gql`query { testGoodbey }`,
    taskAll: gql`query { taskAll{ id name state }}`,
  }
}

</script>

<style scoped>

ul {
  width: 200px;
  border: solid 1px;
}

</style>
