# Find the common difference within the arithmetic progression.

def is_prog(l):
    num = l[1] - l[0]
    for index in range(len(l) - 1):
        if (l[index + 1] - l[index] == num):
            return num

while True:
    lst = input("List: ")
    lst1 = lst.split()
    lst1 = [int(i) for i in lst1]

    print(is_prog(lst1))
    