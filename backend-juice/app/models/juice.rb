class Juice < ApplicationRecord
    serialize :ingredients, Hash
end
