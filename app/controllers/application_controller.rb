class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  # trying this 

  # null session suggested here https://github.com/lynndylanhurley/devise_token_auth/issues/398
  protect_from_forgery #with: :null_session 
  after_filter :set_csrf_cookie_for_ng

  respond_to :html, :json
  
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_filter :set_csrf_cookie_for_ng

  def angular
    render 'layouts/application'
  end

  def after_sign_in_path_for(resource)
  root_path
  end
   
  def after_sign_out_path_for(resource)
  root_path
  end

  private

  # tell devise about username 
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end

  def set_user
  @user||= current_user
  end
   
  def set_csrf_cookie_for_ng
  cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
   

 protected

   # In Rails 4.2 and above
   def verified_request?
     super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
   end

end

# flow of devise described here http://stackoverflow.com/questions/11845500/rails-devise-authentication-csrf-issue