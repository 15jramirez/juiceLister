class User < ApplicationRecord
    has_many :lists
    has_many :juices, through: :lists
    has_secure_password
end
