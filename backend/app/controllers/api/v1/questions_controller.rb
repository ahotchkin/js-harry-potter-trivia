class Api::V1::QuestionsController < ApplicationController

  def index
    questions = Question.all
    render json: questions.to_json
  end

  def show
    question = Question.find(params[:id])
    render json: question.to_json
  end

end
