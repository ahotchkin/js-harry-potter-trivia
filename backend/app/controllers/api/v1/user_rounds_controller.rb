class Api::V1::UserRoundsController < ApplicationController

  def index
    @user_rounds = UserRound.all
    render json: @user_rounds.to_json, status: 200
  end

  def show
    @user_round = UserRound.find_by_id(params[:id])
    render json: @user_round.to_json, status: 200
  end
  
  def create
    @user_round = UserRound.new(user_round_params)
    if @user_round.save
      render json: @user_round.to_json, status: 200
    end
  end

  def update
    @user_round = UserRound.find_by_id(params[:id])
    if @user_round.update(user_round_params)
      render json: @user_round.to_json, status: 200
    end
  end

  private

    def user_round_params
      params.require(:user_round).permit(:user_id, :round_id, :attempts)
    end

end
