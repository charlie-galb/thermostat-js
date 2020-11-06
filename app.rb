require 'sinatra/base'

class Thermostat < Sinatra::Base
  get "/" do
    File.read('public/thermostat.html')
  end
  run! if app_file == $0
end
