class ChangeIngredientsFromJuices < ActiveRecord::Migration[6.1]
  def change
    change_column :juices, :ingredients, :text
  end
end
