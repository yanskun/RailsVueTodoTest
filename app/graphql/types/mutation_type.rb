class Types::MutationType < Types::BaseObject

  # create
  # インプットタイプ仕様に変更
  # 「データ型：String」をTypes::〜〜に修正
  # 入力方式？を変更してるのか？
  field :create_task, TaskType, null: true do
    argument :task, Types::TaskInputType, required: true
  end

  # InputTypes実装前
  # def create_task(name:)
  #   Task.create name: name
  # end

  # 実装後
  def create_task(task:)
    # IDがキー、nameをバリューでのhashに変換するための「to_h」？
    Task.create task.to_h
  end

  # update
  # 「Boolean」は戻り値がない、
  # アップデートはフロントからdbに参照して終わりで良いので
  # 成功したのかしてないのかわかればそれでよし
  field :update_task, Boolean, null: false do
    argument :task, Types::TaskInputType, required: true
  end

  def update_task(task:)
    existing = Task.where(id: task[:id]).first
    existing&.update task.to_h
  end

  # delete

end
