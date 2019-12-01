class CreateAnswerKeys < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_keys do |t|
      t.references :user, foreign_key: true
      t.references :question, foreign_key: true
      t.references :answer, foreign_key: true

      t.timestamps
    end
  end
end
