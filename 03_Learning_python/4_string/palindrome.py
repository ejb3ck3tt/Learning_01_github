#A palindrome is a string that reads the same backwards as forwards. It is usual to remove all non-letters from the string first and to ignore case. Write a function that accepts a string as its argument and returns True if and only if the string is a palindrome. Your main program should allow the user to test input strings until they enter an empty one. For example:

# Hints: The function might use a for loop to build up a list of only the letters in upper case. A second for loop can check that the first letter equals the last, the second equals the second last, etc. Python makes this easy with its negative indices. For your mild amusement.

def reverse(myString):
   return myString[::-1]

def isPalindrome(myString):
   rev = reverse(myString)

   if (myString.upper() == rev):
      return True
   return False

while True:
   myString = input("Enter a string: ")
   alphaString = ""
   for c in myString:
      if c.isalnum():
         alphaString += c.lower()

   res = isPalindrome(alphaString.upper())
   if (res):
      print("It is a palindrome")
   else:
      print("It is not a palindrome")