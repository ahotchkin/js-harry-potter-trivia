class Api::V1::RoundsController < ApplicationController

  def index
    @rounds = Round.all
    render json: @rounds.to_json
  end

  def show
    @round = Round.find(params[:id])
    render json: @round.to_json
    # show questions for the round
  end

end
