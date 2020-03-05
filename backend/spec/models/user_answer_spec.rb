require 'rails_helper'

RSpec.describe UserAnswer, :type => :model do

  describe "validations" do
    it { should validate_presence_of(:correct_answer) }
    it { should validate_presence_of(:user_input) }
  end

  describe "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:round) }
    it { should belong_to(:question) }
  end

end
