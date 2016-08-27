Rails.application.routes.draw do
  root to: 'pages#root'
  get '/404', to: 'pages#root'
  get '*path', to: 'pages#not_found'
end
