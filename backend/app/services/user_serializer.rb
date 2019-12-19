class UserSerializer

  def initialize(user_object)
    @user = user_object
    @user.save
  end

end
