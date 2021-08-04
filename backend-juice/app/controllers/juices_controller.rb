class JuicesController < ApplicationController

    def index
        juices = Juice.all 
        render json: JuiceSerializer.new(juices)
    end

    def show
    end
end
