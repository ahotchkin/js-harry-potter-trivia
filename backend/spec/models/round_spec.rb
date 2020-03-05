require 'rails_helper'

RSpec.describe Round, :type => :model do

  describe "validations" do
    it { should validate_presence_of(:title) }
  end

  describe "associations" do
    it { should have_many(:questions) }
    it { should have_many(:user_answers) }
  end
  
end
