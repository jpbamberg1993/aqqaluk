Aqqaluk::Application.routes.draw do
  root :to => 'pages#home'

  get "pages/home"
  get "pages/home_v2"
  get "pages/about_us"
  get "pages/news"
  get "pages/founder"
  get "pages/board_members"
  get "pages/staff"
  get "pages/education"
  get "pages/students_v1"
  get "pages/savaktuq"
  get "pages/language"
  get "pages/language_v1"
  get "pages/camp"
  get "pages/support"
  get "pages/golf_challenge"
  get "pages/memorial_fund"

  comfy_route :cms_admin, :path => '/admin'
  # Make sure this routeset is defined last
  comfy_route :cms, :path => '/test', :sitemap => false
end
