class Api::V1::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user.to_json, status: 200
    end
  end

  private

    def user_params
      params.require(:user).permit(:username)
    end

end
