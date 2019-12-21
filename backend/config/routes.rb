Rails.application.routes.draw do

  # Do I need all of these???

  resources :user_answers
  resources :questions
  resources :users
  resources :rounds
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
