class AddQuestionNumberToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :question_number, :integer
  end
end
