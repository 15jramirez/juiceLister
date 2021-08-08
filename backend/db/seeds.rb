# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create( username: "pencil", password: "1234")
List.create( name: "My awesome lsit", user_id: 1, juice_id: 1, description:"my mexican health juices")

Juice.create([
    {name: "Green Juice", ingredients:{apple: "need 3 apples for this", spinach: "need 3 cups"}, image: "images/greenjuice.jpg"},
    {name: "Beet Juice", ingredients:{beet: "4 large", carrot: "want 5 carrot sticks"}, image: "images/download.jpg"}
])

