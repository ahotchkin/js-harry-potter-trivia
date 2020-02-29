class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :number
      t.text :content
      t.text :answer_a
      t.text :answer_b
      t.text :answer_c
      t.text :answer_d
      t.string :correct_answer
      t.references :round, foreign_key: true

      t.timestamps
    end
  end
end
