class Api::V1::UserAnswersController < ApplicationController

  def index
    @user_answers = UserAnswer.all
    render json: @user_answers.to_json, status: 200
  end
end
