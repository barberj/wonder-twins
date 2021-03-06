require 'sinatra'
require 'json'
require 'faker'
require 'slim'

transactions = (1..27).inject([]) do |t, i|
  record = {
    "id" => i,
    "company" => Faker::Company.name,
    "first_name" => Faker::Name.first_name,
    "last_name" => Faker::Name.last_name,
    "email" => Faker::Internet.email,
    "amount" => Faker::Number.decimal(2),
    "description" => Faker::Lorem.sentence
  }

  t << record
end

get '/transactions' do
  content_type :json

  {
    records: transactions,
    count: transactions.size
  }.to_json
end

get '/' do
  slim :index
end
