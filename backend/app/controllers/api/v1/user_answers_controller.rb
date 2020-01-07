class Api::V1::UserAnswersController < ApplicationController

  def index
    @user_answers = UserAnswer.all
    render json: @user_answers.to_json, status: 200
  end

  def create
    @user_answer = UserAnswer.new(user_answer_params)
    if @user_answer.save
      render json: @user_answer.to_json, status: 200
    end
  end


  private

    def user_params
      params.require(:user).permit(:username)
    end

end
