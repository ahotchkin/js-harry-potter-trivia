Rails.application.routes.draw do

  # Do I need all of these???

  namespace :api do
    namespace :v1 do
      resources :user_answers
      resources :questions
      resources :users
      resources :rounds
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
