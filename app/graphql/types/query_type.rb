class Types::QueryType < Types::BaseObject

  field :task, Types::TaskType, null: true do
    argument :id, ID, required: true
  end

  def task(id:)
    Task.find(id)
  end

# -------------

  field :task_all, [Types::TaskType], null: true do
  end

  def task_all
    Task.all
  end

# -------------

  field :test_hello, String, null: false,
    description: "これはテスト" do
    end

  def test_hello
    "Hello World!？"
  end

  field :test_goodbey, String, null: false,
    description: "これもテスト" do
    end

  def test_goodbey
    "Goodbey World..."
  end

end
