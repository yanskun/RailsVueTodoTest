import gql from 'graphql-tag';

export const getTasks = gql `
  {
    tasks {
      id
      name
      state
    }
  }
`;
