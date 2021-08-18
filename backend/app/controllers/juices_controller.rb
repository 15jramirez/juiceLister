require 'pry'
class JuicesController < ApplicationController
    
    def index
        render json: JuiceSerializer.new(Juice.all)
    end

    def create
        # whitelisted own params due to permit not allowed 
        juice = Juice.create(
            :name => params[:name],
            :description => params[:description],
            :category_id => params[:category],
            :ingredients => params[:ingredients],
            :image => params[:image_url]
        )
        if juice.save 
            render json: JuiceSerializer.new(juice) 
        else
            render json: juice.errors, message: "Oops. Can't find it. Try your spelling"
        end
    end

    def show 
        juice = Juice.find(params[:id])
       render json: JuiceSerializer.new(juice)
    end

    def update
    juice = Juice.find(params[:id])
    juice.update(
          :name => params[:name],
         :description => params[:description],
         :ingredients => params[:ingredients]
         )
    juice.save
  render json: JuiceSerializer.new(juice)
    end

    # def destroy 
    #    juice.destroy
    # end


end
