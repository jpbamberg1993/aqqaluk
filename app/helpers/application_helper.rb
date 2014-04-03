module ApplicationHelper
  include Mobvious::Rails::Helper

  def compile_markdown(text)
    markdown_renderer = Redcarpet::Markdown.new(Redcarpet::Render::HTML)

    markdown_renderer.render(text).html_safe
  end


  def head
    render :partial => 'layouts/head'
  end

  def scripts
    render :partial => 'layouts/scripts'
  end

  def browsehappy
    render :partial => 'layouts/browsehappy'
  end

  def nav_location(title, url, options = {})
    current_nav = options.delete(:current)
    options[:class] = (current_nav == title) ? 'active' : 'inactive'
    content_tag(:li, link_to(title, url), options)
  end

  def currently_at(location)
    render partial: 'layouts/navigation', locals: {current_nav: location}
  end
end
