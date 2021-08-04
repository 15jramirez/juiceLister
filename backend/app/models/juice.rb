class Juice < ApplicationRecord
    serialize :ingredients   #allows to convert ingridents into a hash vs a string
    has_many :lists
    has_many :users, through: :lists
end
