class Juice < ApplicationRecord
    serialize :ingredients, Hash 
    has_many :lists
    has_many :users, through: :lists
end
