Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :user_answers, only: [:index, :create]
      resources :questions, only: [:show]
      resources :users, only: [:create]
      resources :rounds, only: [:show]
      resources :user_rounds, only: [:index, :show, :create, :update]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
