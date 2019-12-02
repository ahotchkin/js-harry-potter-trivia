class AddUserInputToUserAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :user_answers, :user_input, :string
  end
end
