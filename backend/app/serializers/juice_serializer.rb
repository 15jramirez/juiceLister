class JuiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :ingredients, :category_id, :image_url, :id
end
