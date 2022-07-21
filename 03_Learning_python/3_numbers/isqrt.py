#The integer square root of a number (that is greater than or equal to zero) is the largest integer that when multiplied by itself is not bigger than the original number. Write a function that computes the integer square root of its argument

#sample run
# Enter a number: 4 
# Integer square root = 2 
# $ python3 iSqrt.py 
# Enter a number: 6.6 
# Integer square root = 2 
# $

def sr(n):
  if n == 0 or n == 1:
    return n

  i = 1
  result = 1
  while(result <= n):
    i +=1
    result = i * i
  return i - 1

n = float(input("Enter a number: "))
print("Integer square root =", sr(n))