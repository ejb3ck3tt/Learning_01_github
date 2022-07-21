#Write a function that returns True if and only if its string argument contains no digits. Your program should allow the user to test the function over and over in a loop

#sample run
# Enter a string: sdsdffd 
# Has no digits: True 
# Enter a string: fff5ggg 
# Has no digits: False 
# Enter a string: 
# $


while True:
  text = input("Enter a string: ")

  def nodigit(text):
    if any(char.isdigit() for char in text):
      return False
    else:
      return True
  print("has no digit:", nodigit(text))