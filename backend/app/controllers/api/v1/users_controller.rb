class Api::V1::UsersController < ApplicationController

  # is this needed?
  def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    @user = User.find(params[:id])
    render json: @user.to_json
  end

  def create
    # binding.pry
    @user = User.new(user_params)
    @user.save
    render json: @user
    # try to get this working with serializer
    # render json: UserSerializer.new(@user)
  end

  private

    def user_params
      params.require(:user).permit(:username)
    end

end
