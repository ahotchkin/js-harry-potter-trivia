class Api::V1::QuestionsController < ApplicationController

  def show
    @question = Question.find(params[:id])
    render json: @question.to_json
  end

end
