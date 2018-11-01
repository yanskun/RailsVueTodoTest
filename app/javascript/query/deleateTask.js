import gql from 'graphql-tag';

export const DRLEATE_TASK = gql `
mutation {
  deleteTask(id:index)
}
`
