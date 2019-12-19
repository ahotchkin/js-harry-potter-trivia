class UsersController < ApplicationController

  def index
    users = User.all
    render json: users.to_json
  end

  def create
    # How can I get this to use the name entered in the form???
    user = User.new(user_params)
    render json: UserSerializer.new(user)
  end

  private

    def user_params
      params.requre(:user).permit(:username)
    end

end
