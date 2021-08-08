class CreateJuices < ActiveRecord::Migration[6.1]
  def change
    create_table :juices do |t|
      t.string :name
      t.text :ingredients
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
