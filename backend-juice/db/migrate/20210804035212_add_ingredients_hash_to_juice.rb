class AddIngredientsHashToJuice < ActiveRecord::Migration[6.1]
  def change
    add_column :juices, :ingredients, :text 
  end
end
