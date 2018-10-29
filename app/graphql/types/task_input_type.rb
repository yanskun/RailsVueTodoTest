# コイツがあることによって、
# GraphiQLでタスク追加するときに、同じ事をなんどもタイプする必要がなくなる
# DRYになる

class Types::TaskInputType < GraphQL::Schema::InputObject
  graphql_name "TaskInputType"

  argument :id, ID, required: false
  argument :name, String, required: true
end
