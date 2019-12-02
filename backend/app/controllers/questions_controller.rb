class QuestionsController < ApplicationController

  def index
    questions = Question.all
    render json: questions.to_json
  end

end
