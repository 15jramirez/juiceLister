class JuicesController < ApplicationController

    def index
        juices = Juice.all 
        byebug
        render json: juices
    end

    def show 
        juice = Juice.find_by(id: params[:id])
        render json: juice
    end

    private
        def juice_params
            params.require(:juice).permit(:name, :ingredients, :image)
        end
end
