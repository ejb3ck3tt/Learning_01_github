#Write a program that reads whole numbers typed by the user until a negative number is entered, then prints the number of even numbers that were entered.

#sample run:
# Enter a number: 3 
#  Enter a number: 4 
# Enter a number: 7 
# Enter a number: 2 
# Enter a number: 2 
# Enter a number: 9 
# Enter a number: -1 
# 3 
# even numbers were entered. 

number = 1
countEven = 0

while number >=0:
  number = int(input("Enter a number: "))
  # % modulo is used to get the remainder of a division
  if number % 2 == 0:
    #add 1 if it is 0
    countEven += 1
print(countEven, "Even numbers entered")