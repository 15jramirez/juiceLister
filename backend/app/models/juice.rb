class Juice < ApplicationRecord
  include Rails.application.routes.url_helpers #need this to connect to api link
  belongs_to :category
  has_one_attached :image

  def image_url
    if image.attached?
      url_for(image)
    end
  end
  
end
