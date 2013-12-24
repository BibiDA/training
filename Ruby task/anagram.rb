class Anagram
  def initialize(name)
    @name = name
  end
  def file_open
    File.open("#{@name}") do |file|
      file_read(file)
    end
  end
  def file_read(file1)
    file1.each_line do |line| 
      finder(line)
    end
  end
  def finder(ar)
    result=ar.split(" ").group_by { |element| element.chars.sort }.values
    display(result)
  end
  def display(res)
    print res
    puts "\n"
  end
end
puts "Enter file name"
val=gets.gsub(/["\n"]/,"")
an=Anagram.new(val)
an.file_open
