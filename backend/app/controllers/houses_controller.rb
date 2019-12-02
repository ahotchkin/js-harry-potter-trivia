class HousesController < ApplicationController

  def index
    houses = House.all
    render json: houses.to_json
    # @house = House.new(:name => "Ravenclaw")
    # @house.to_json()

  end

end
