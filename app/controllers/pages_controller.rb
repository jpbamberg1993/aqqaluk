class PagesController < ApplicationController
  def save_markdown
    render(
      partial: 'pages/markdown_panel',

      locals: {markdown_source_z: params[:markdown_source_b]}
    )
  end

  def edit_markdown
    render(
      partial: 'pages/markdown_editor',
      locals: {markdown_source: params[:markdown_source_g]}
    )
  end

  def home
  end

  def home_v2
  end

  def students
  end

  def students_v1
  end

  def language
  end

  def language_v1
  end

  def camp
  end

  def news
  end

  def support
  end
end
