class Juice < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :category
  has_one_attached :image
  serialize :ingredients, Hash

  def image_url
    if image.attached?
      url_for(image)
    end
  end
  
end
