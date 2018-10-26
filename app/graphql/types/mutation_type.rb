class Types::MutationType < Types::BaseObject

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

end
