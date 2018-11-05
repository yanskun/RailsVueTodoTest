# frozen_string_literal: true

class Types::TaskType < Types::BaseObject
  field :id, ID, null: false
  field :name, String, null: false
  field :state, Integer, null: false
end
