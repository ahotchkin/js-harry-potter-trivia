class CreateUserRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :user_rounds do |t|
      t.references :user, foreign_key: true
      t.references :round, foreign_key: true
      t.integer :attempts

      t.timestamps
    end
  end
end
