class AddImageToJuices < ActiveRecord::Migration[6.1]
  def change
    add_column :juices, :image, :string
  end
end
