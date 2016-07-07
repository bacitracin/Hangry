Rails.application.routes.draw do

  devise_for :users, :defaults => { :format => 'json' }
  
  # Added response to JSON for Users resource to fix log out issue 
  # http://stackoverflow.com/questions/37066679/how-to-fix-issue-no-route-matches-delete

  root 'application#angular'

  namespace :api, defaults:{format: :json} do
    resources :restaurants
  end

  resources :reviews 

end
