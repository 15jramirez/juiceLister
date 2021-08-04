class JuicesController < ApplicationController
    def index
        juices = Juice.all 
        render json: juices
    end
end
