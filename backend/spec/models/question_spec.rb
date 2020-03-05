require 'rails_helper'

RSpec.describe Question, :type => :model do

  describe "validations" do
    it { should validate_presence_of(:content) }
    it { should validate_presence_of(:question_number) }
    it { should validate_presence_of(:answer_a) }
    it { should validate_presence_of(:answer_b) }
    it { should validate_presence_of(:answer_c) }
    it { should validate_presence_of(:answer_d) }
    it { should validate_presence_of(:correct_answer) }
  end

  describe "associations" do
    it { should belong_to(:round) }
    it { should have_many(:user_answers) }
  end
  
end
