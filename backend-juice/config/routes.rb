Rails.application.routes.draw do
  resources :users, only:[:create]  #will fix route later; not sure if want to create user
  resources :juices, only: [:index, :show]
  resources :lists, only: [:show, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
