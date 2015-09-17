module ApplicationHelper
  include Mobvious::Rails::Helper

  def head
    render :partial => 'layouts/head'
  end

  def scripts
    render :partial => 'layouts/scripts'
  end

  def browsehappy
    render :partial => 'layouts/browsehappy'
  end

  def title(page_title)
    content_for(:title) { page_title }
  end

  def nav_switch(title)
    if device_type == :mobile
      nav_at(title, {in: :mobile})
    else
      nav_at(title)
    end
  end
end
