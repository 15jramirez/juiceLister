class JuiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :ingredients, :category_id, :image_url, :id, :description  #need image_url tag to pass url
end
