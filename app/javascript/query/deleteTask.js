import gql from 'graphql-tag';

// export const DELETE_TASK = gql `
// mutation deleteTask($task:ID!) {
//   deleteTask(id: $task) {
//     id
//     name
//     state
//   }
// }
// `
export const DELETE_TASK = gql `
mutation deleteTask($id:ID!){
  deleteTask(id:$id){
    id
  }
}`
