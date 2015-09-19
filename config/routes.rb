Aqqaluk::Application.routes.draw do
  root :to => 'pages#home'

  get '/home',           to: 'pages#home'
  get '/home_v2',        to: 'pages#home_v2'
  get '/about-us',       to: 'pages#about_us',       as: :about_us
  get '/news',           to: 'pages#news'
  get '/founder',        to: 'pages#founder'
  get '/board-members',  to: 'pages#board_members',  as: :board_members
  get '/staff',          to: 'pages#staff'
  get '/education',      to: 'pages#education'
  get '/students_v1',    to: 'pages#students_v1'
  get '/savaktuq',       to: 'pages#savaktuq'
  get '/faq',            to: 'pages#faq'
  get '/blog',           to: 'pages#blog'
  get '/language',       to: 'pages#language'
  get '/language_v1',    to: 'pages#language_v1'
  get '/camp',           to: 'pages#camp'
  get '/support',        to: 'pages#support'
  get '/golf-challenge', to: 'pages#golf_challenge', as: :golf_challenge
  get '/memorial-fund',  to: 'pages#memorial_fund',  as: :memorial_fund

  comfy_route :cms_admin, :path => '/admin'
  # Make sure this routeset is defined last
  comfy_route :cms, :path => '/', :sitemap => false
end
