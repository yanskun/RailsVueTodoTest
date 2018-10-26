class Types::MutationType < Types::BaseObject

  field :create_task, Types::TaskType, null: true do
    argument :name, String, required: true
  end

  def create_task(name:)
    Task.create name: name
  end

end
