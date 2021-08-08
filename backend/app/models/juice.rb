class Juice < ApplicationRecord

  has_one_attached :image
  belongs_to :category
  serializer :ingredients, Hash
end
