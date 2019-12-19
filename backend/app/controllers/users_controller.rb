class UsersController < ApplicationController

  def index
    users = User.all
    render json: users.to_json
  end

  def create
    user = User.new(user_params)
    # user.save
    render json: UserSerializer.new(user)
  end

  # def create
  #   pokemon = Pokemon.new(:nickname => Faker::Name.first_name, :species => Faker::Games::Pokemon.name, :trainer_id => params[:trainer_id])
  #   render json: PokemonSerializer.new(pokemon)
  # end

  private

    def user_params
      params.requre(:user).permit(:username)
    end

end
