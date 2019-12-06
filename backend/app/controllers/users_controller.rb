class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    user.save
  end

  private

    def user_params
      params.requre(:user).permit(:username, :house)
    end

end
