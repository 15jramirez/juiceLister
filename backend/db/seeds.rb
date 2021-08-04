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
    {name:"Green Juice", ingredients:["2 apples", "2 cups of spinach", "2 celery sticks"]},
    {name: "Beet Juice", ingredients:["4 beets large", "5 carrtos sticks", "120ml of squeezed orange"]}
])
