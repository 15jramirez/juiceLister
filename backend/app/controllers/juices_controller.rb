class JuicesController < ApplicationController
    before_action :find_profile, only:[:show,:update,:destroy]

    def index
        render json: Juice.all #here will make attached image come with api
    end

    def create
        juice = Juice.new(juice_params)
        if juice.save 
            render json: juice 
        else
            render json: juice.errors, message: "Oops. Can't find it. Try your spelling"
        end
    end

    def show 
        
        render json: juice
    end

    # def update 
    #    juice.image.attach(params[:image]) 
    #     if valid?
    #         juice.update(juice_params)
    #     end
    # end

    # def destroy 
    #    juice.destroy
    # end

    private
        def juice_params
            params.require(:juice).permit(:name, :ingredients, :image)
        end

        def find_juice
            juice = Juice.find(params[:id])
        end
end
