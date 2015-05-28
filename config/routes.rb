AngularCatalog::Application.routes.draw do
  resources :products
  root to: 'application#angular'
end
