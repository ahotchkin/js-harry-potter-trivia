class Api::V1::UserAnswersController < ApplicationController

  def index
    @user_answers = UserAnswer.all
    render json: @user_answers.to_json, status: 200
  end

  def create
    binding.pry
    @user_answer = UserAnswer.new(user_answer_params)
    if @user_answer.save
      render json: @user_answer.to_json, status: 200
    end
  end


  private

    def user_answer_params
      params.require(:user_answer).permit(:user_id, :round_id, :question_id, :correct_answer, :user_input)
      # params.require(:user_answer).permit(:user_input)
    end

end
