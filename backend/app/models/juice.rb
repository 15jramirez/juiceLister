class Juice < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :category
  has_one_attached :image
  serialize :ingreidents, Hash

  def image_url
    image.attached? ? url_for(image) : nil
  end
end
