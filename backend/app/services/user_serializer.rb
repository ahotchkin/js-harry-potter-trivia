# is this needed?

class UserSerializer

  def initialize(user_object)
    @user = user_object
  end
  #
  # def to_serialized_json
  #   @user.to_json(:include => [:id, :username])
  # end

end
