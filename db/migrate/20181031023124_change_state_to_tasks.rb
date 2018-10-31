class ChangeStateToTasks < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tasks, :state, :integer
  end
end
