class AddDescriptionToJuices < ActiveRecord::Migration[6.1]
  def change
    add_column :juices, :description, :text
  end
end
