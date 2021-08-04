class User < ApplicationRecord
    has_many :lists
    has_many :juices, through: :lists
end
