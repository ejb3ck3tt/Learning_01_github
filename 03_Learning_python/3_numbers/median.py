# The median of a sequence of numbers is the value in the middle, that is, if the numbers are sorted, as many numbers in the sequence are above the median as below. If there are an odd number of values, the median is just the middle one. If there is an even number of values, the median is halfway between the two values closest to the middle. Write a program that allows the user to enter numbers until a blank line is entered instead of number, and then prints the median. 

# Don't use the statistic module
#Sample run
# Enter a number: 2
# Enter a number: 3
# Enter a number: 4
# Enter a number: 5
# Enter a number: 
# median 3.0

getList = []

while True:
    num = input("Enter a number: ")
    if num == "":
        break
    a = int(num)
    getList.append(a)
    getList.sort()
    n = len(getList)
    do_sum = sum(getList)
    mean = do_sum / n

print("median", mean)