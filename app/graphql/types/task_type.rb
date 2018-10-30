class Types::TaskType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :state, String, null: false
end
