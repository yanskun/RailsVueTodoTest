import gql from 'graphql-tag';

export const DELETE_TASK = gql `
mutation deleteTask($id:ID!) {
  deleteTask(id: $id)
}
`
// export const DELETE_TASK = gql `
// mutation {
//   deleteTask(id: 4)
// }
