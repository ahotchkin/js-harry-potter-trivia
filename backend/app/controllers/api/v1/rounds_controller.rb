class Api::V1::RoundsController < ApplicationController

  def show
    @round = Round.find(params[:id])
    render json: RoundSerializer.new(@round).to_serialized_json, status: 200
  end

end
