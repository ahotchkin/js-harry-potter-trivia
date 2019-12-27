class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    @user = User.find(params[:id])
    render json: @user.to_json
  end

  def create
    @user = User.new(user_params)
    render json: UserSerializer.new(@user)
  end

  private

    def user_params
      params.require(:user).permit(:username)
    end

end
