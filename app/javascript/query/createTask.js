import gql from 'graphql-tag';

export const CREATE_TASK = gql `
mutation createTask($task:TaskInputType!) {
	createTask(task:$task){
  	name
    state
  }
}
`
