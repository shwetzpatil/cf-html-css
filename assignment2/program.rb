puts "hello"
p "hello"
p 4
puts "4+4"
puts 4+4
p "4" + "4"
p 4+4
def greeting
    puts "beellloo"
end
greeting

no = [1,2,3] 
no.map do |n|
  n = n * n
  puts n
end

def greeting(name)
    3.times do
    print "hello" + " " + name
    puts "hello" + " " + name
    end    
end
greeting("shweta")
puts "over"

my_name = "shwetz"
greeting(my_name)

def greeting
    puts "Please enter your name:"
    name = gets.chomp
    puts "hello" + " " + name + " !!!"
end
greeting

numbers =[1,2,3,4]
numbers.each do |x|
    x = x * 10
    puts x 
end
 
a = 5
case a
when 1..4,5
  puts "it's number from 1 to 5"
when 6
  puts "it's number 6"
when String
  puts "this is string"
else
  puts "I don/'t know what #{a} is" 
end     

