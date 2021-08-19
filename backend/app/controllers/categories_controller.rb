class CategoriesController < ApplicationController

    def index 
        render json: CategorySerializer.new(Category.all)
    end

    def show
        category = Category.find(params[:id])
        render json: CategorySerializer.new(category)
    end 
end
