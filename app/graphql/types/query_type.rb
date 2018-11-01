class Types::QueryType < Types::BaseObject

  field :tasks, [Types::TaskType], null: true do
  end

  def tasks
    Task.all
  end

end
