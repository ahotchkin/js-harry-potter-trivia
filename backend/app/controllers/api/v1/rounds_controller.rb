class Api::V1::RoundsController < ApplicationController

  # is this needed
  def index
    @rounds = Round.all
    render json: @rounds.to_json
  end

  def show
    @round = Round.find(params[:id])
    # move this to a serializer
    render json: @round.to_json(:include => {
      :questions => {:only => [:content, :answer_a, :answer_b, :answer_c, :answer_d]}
    })
    # show questions for the round
  end

end
