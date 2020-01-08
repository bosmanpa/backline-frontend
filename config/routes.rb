Rails.application.routes.draw do
  resources :equipment_models
  resources :equipment_types
  resources :equipment
  resources :equipment_rentals
  resources :events
  resources :owned_equipments
  resources :users
  post '/auth', to: 'auth#create'
  get '/current_user', to: 'auth#show'
end
