# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Juice.create([
#     {name: "Green Juice", ingredients:{apple: "need 3 apples for this", spinach: "need 3 cups"},},
#     {name: "Beet Juice", ingredients:{beet: "4 large", carrot: "want 5 carrot sticks"}}
# ])
Category.create( name: "healthy")
 one = Juice.create!({name: "Green Juice", ingreidents:{apple: "need 3 apples for this", spinach: "need 3 cups"}, category_id: 1 })
 one.save
 one.image.attach(io: File.open("#{Rails.root}/app/assets/images/greenjuice.png"), filename:"greenjuice.png", content_type:"image/png" )