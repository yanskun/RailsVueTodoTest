# ミューテーションを別ファイルに格納しようとしたけどできなかった
# その時の残骸
#
# class Mutations::CreateTaskMutation < Mutations::BaseMutation
#
#   argument :task, Types::TaskInputType, required: true
#
#   field :create_task, Types::TaskInputType, null: true
#
#   def create_task(task:)
#     Task.create task.to_h
#   end
# end
