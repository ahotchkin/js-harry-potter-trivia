class Api::V1::RoundsController < ApplicationController

  # is this needed
  def index
    @rounds = Round.all
    render json: @rounds.to_json
  end

  def show
    @round = Round.find(params[:id])
    render json: RoundSerializer.new(@round).to_serialized_json
  end

end
