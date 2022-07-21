#Write a function that given a list, returns both the minimum and maximum values in the list. Your main program should allow the user to enter space-separated numbers as test lists, until a blank line is entered.

#minmax 1 2 3
myLists = []

def get_minmax(myLists):
    min = None
    max = None
    for myList in myLists:
        min = myList if min is None or myList < min else min
        max = myList if max is None or myList > max else max
    return 'min: = ', min, ' max = ', max

while True:
    num = input("List: ")
    if num:
        if num != "":
           myLists.append(num)
           myLists = num.split(sep=None)
           x = get_minmax(myLists)
           y = "".join(x)
           print(y)
    else:
        break


#Requires refactor, double digits not being recognised



