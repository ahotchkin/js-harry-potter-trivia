class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :content
      t.integer :correct_answer_id
      t.references :round, foreign_key: true

      t.timestamps
    end
  end
end
