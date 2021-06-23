# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

@user = User.create!(username: 'artem', email: 'artemfm@gmail.com', password: '123456')

puts "#{User.count} users created"

@Starbucks = Post.create!(location: '26 Broadway', description: 'Starbucks', zipcode: "10021", user: @user)
@Sweetleaf = Post.create!(location: '10-93 Jackson Ave', description: 'Sweetleaf Coffee Roasters', zipcode: "11101", user: @user)
@Castro = Post.create!(location: '427 Castro St', description: 'Castro Coffee Company', zipcode: "94114", user: @user)
@Austin = Post.create!(location: '5002 N Lamar Blvd', description: 'Austin Books & Comics', zipcode: "78751", user: @user)
@Botanic = Post.create!(location: '990 Washington Ave', description: 'free outlet outside the  Botanic Garden', zipcode: "11225", user: @user)
@EVgo = Post.create!(location: '589 Prospect Ave', description: 'EVgo Charging Station', zipcode: "11215", user: @user)


puts "#{Post.count} posts created"

@comment1 = Comment.create!(content: 'free tall coffee or tea if you use this app', user: @user, post: @Starbucks)
@comment2 = Comment.create!(content: 'they have a place to lock up and charge', user: @user, post: @Sweetleaf)
@comment3 = Comment.create!(content: 'built in charging station at their bike rack', user: @user, post: @Castro)
@comment4 = Comment.create!(content: 'free use of outlets if you show this app', user: @user, post: @Austin)
@comment5 = Comment.create!(content: 'used this all the time is great', user: @user, post: @Starbucks)
@comment6 = Comment.create!(content: 'you get 5% off if you use the app', user: @user, post: @Starbucks)
@comment7 = Comment.create!(content: 'I charge here all the time', user: @user, post: @Botanic)
@comment8 = Comment.create!(content: 'great place to stop and charge on the way to the beach', user: @user, post: @Austin)

puts "#{Comment.count} comments created"