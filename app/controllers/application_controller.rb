class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include Mobvious::Rails::Controller

  before_filter :prepare_for_mobile


  private

  def prepare_for_mobile
    if request.env['mobvious.device_type'] == :mobile
      request.format = :mobile
      prepend_view_path "app/views/mobile"
    end
  end
end
