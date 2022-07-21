# Find the diff between the 2 list

li1 = []
li2 = []

def theDiff(li1, li2):
    li_dif = [i for i in li1 if i not in li2]
    return li_dif

while True:
    num1 = input("List 1: ")
    num2 = input("List 2: ")
    if num1:
        if num1 != "":
            li1 = num1.split()
            li2 = num2.split()
            li3 = theDiff(li1, li2)
            results = [int(i) for i in li3]
        print(results)
    else:
        break
