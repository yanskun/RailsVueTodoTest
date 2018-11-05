# frozen_string_literal: true

# このファイルは、GraphQLの変数指定を簡易化することができるもの

class Types::TaskInputType < GraphQL::Schema::InputObject
  graphql_name 'TaskInputType'

  argument :id, ID, required: false
  argument :name, String, required: true
  argument :state, Integer, required: true
end
