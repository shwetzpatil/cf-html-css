class Pet
  attr_reader :color, :breed
  attr_accessor :name

  def initialize (color,breed)
    @color = color
    @breed = breed
    @hungry = true
  end

  def feed (food)
    puts "Mmm," + food + "!"
    @hungry = false
  end

  def hungry?
    if @hungry
      puts "Yes,I'm hungry!"
    else
      puts "I'm full now!"
    end
    @hungry     
  end
end

class Cat < Pet
  def speak
    puts "Meow"
  end  
end

class Dog < Pet
  def speak
    puts "Woof!"
  end
end 

  kitty = Cat.new("White","Persian")  

  puts "Let's inspect our new cat:"
  puts kitty.inspect
  puts "What class our cat belongs to?"
  puts kitty.class
  puts "Is our cat is new object?"
  puts kitty.is_a?(Object)
  puts "What color is our cat?"
  puts kitty.color
  puts "Let's give our new cat a name"
  kitty.name = "Maggie"
  puts kitty.name
  puts "Is our cat is hungry?"
  kitty.hungry?
  puts "Let's feed our cat"
  kitty.feed("tuna")
  puts "Is our cat is hungry now?"
  kitty.hungry?
  puts "our cat can make noise"
  kitty.speak

  puppy = Dog.new("black","staffordshire Terrier")
  puts "Our dog is of breed"
  puts puppy.breed
  puts "Our dog can make noise"
  puppy.speak



 
