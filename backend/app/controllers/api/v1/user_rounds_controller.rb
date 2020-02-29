class Api::V1::UserRoundsController < ApplicationController

  def index
    @user_rounds = UserRound.all
    render json: @user_rounds.to_json, status: 200
  end

  def create
    @user_round = UserRound.new(user_round_params)
    if @user_round.save
      render json: @user_round.to_json, status: 200
    end
  end

  private

    def user_round_params
      params.require(:user_answer).permit(:user_id, :round_id, :attempts)
    end

end
