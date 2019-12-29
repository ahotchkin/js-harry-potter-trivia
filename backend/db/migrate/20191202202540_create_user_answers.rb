class CreateUserAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :user_answers do |t|
      t.references :user, foreign_key: true
      t.references :round, foreign_key: true
      t.references :question, foreign_key: true
      t.string :correct_answer
      t.string :user_input

      t.timestamps
    end
  end
end
