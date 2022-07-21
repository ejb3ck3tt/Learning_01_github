"""
Difference between definite and indefinite loop.
- Definite loop, the programmer can know when the loop starts how many repetitions are required. 
- Indefinite loop, the programmer or the program can’t know how many iterations will be required; it must repeat until certain condition is met.
"""

# count how many times the print statement will execute
for i in range(1000):
  i +=1
print("count", i)
  # count: 1000 | index starts at 0

for i in range(1, 1000):
  i +=1
print("count", i)
  # count: 1000 | starts at 1 and excludes the last count

for i in range(1000):
  i +=1
  for j in range(1000):
    j += 1
print("count", i, j)
  # count is: 1 000 000 | loops 1000 times and a thousand times more. 1000 * 1000

for i in range(1, 101):
  # exec first
  for j in range(1, i + 1):
    print("count")
print(i)
  #count is: 100 | count starts at 1, exec j 99 times and adds 1 to i


i = 0
while i < 10:
  i+=1
print(i)
# count is 10, count starts at 0

i = 0
while i<10:
  print(i)
  # i modulo of 2 === 0 add 1
  if i % 2 == 0:
    i+=1
  # infinite loop | i is less than 10 and modulo of i is 0

# execute to see the result, by default - print functions ends with a new line
for i in range(5):
  print('*')

for i in range(5):
  print('*', end = "")
  #end="" | add any string at the end of he output and no new line

for i in range(6):
  print('*' * i)
  # will print 5 rows with * increments of stars per line every loop

for i in range(5):
  print(' '*i, '*', sep="")
  #prints a newline separately + whitespace

for i in range(5):
   print(' ' * (5 - i), '*', sep = "")
   #prints a newline separately, add whitespace count starts from 5