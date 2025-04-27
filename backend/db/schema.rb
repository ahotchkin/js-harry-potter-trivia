# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2020_02_29_220856) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "questions", force: :cascade do |t|
    t.text "content"
    t.text "answer_a"
    t.text "answer_b"
    t.text "answer_c"
    t.text "answer_d"
    t.string "correct_answer"
    t.bigint "round_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "question_number"
    t.index ["round_id"], name: "index_questions_on_round_id"
  end

  create_table "rounds", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "user_answers", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "round_id"
    t.bigint "question_id"
    t.string "correct_answer"
    t.string "user_input"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["question_id"], name: "index_user_answers_on_question_id"
    t.index ["round_id"], name: "index_user_answers_on_round_id"
    t.index ["user_id"], name: "index_user_answers_on_user_id"
  end

  create_table "user_rounds", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "round_id"
    t.integer "attempts"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["round_id"], name: "index_user_rounds_on_round_id"
    t.index ["user_id"], name: "index_user_rounds_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  add_foreign_key "questions", "rounds"
  add_foreign_key "user_answers", "questions"
  add_foreign_key "user_answers", "rounds"
  add_foreign_key "user_answers", "users"
  add_foreign_key "user_rounds", "rounds"
  add_foreign_key "user_rounds", "users"
end
