# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 Category.create([{name: "Immune Boost"}, {name:"Lower Blood Pressure"}, {name: "Detox"}])
 one = Juice.create!({name: "Green Juice", description: "Flavorfull Juice that often contains celery, spinach, and green apple", ingredients:"apple: need 3 apples for this spinach: need 3 cups", category_id: 1 })
 one.save
 one.image.attach(io: File.open("#{Rails.root}/app/assets/images/greenjuice.png"), filename:"greenjuice.png", content_type:"image/png" ) #file path to seed image

 two = Juice.create!({name: "jugo de betabel- Beet Juice", description: "Tastey beet juice. Helps with lowering blood pressure.", ingredients:"carrot: 5 sticks. can be sliced, beets: 4 large pieces or 6 small, orange: 125ml(4 cups) of fresh squeezed orange or orange juice", category_id:2})
 two.save
 two.image.attach(io: File.open("#{Rails.root}/app/assets/images/beetjuice.jpg"), filename:"beetjuice.jpg", content_type:"image/jpg")