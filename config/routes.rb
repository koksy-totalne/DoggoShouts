Rails.application.routes.draw do
  resources :messages
  devise_for :users,controllers: {omniauth_callbacks: 'omniauth', registrations: 'registrations', sessions: 'sessions'}
  root 'pages#home'
  resources :users, only: [:show, :edit, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
