# Check a sequence of numbers is an arithmetic progression or not


def is_prog(l):
    num = l[1] - l[0]
    for index in range(len(l) - 1):
        if not (l[index + 1] - l[index] == num):
            return False
    return True


def is_single(m):
    num1 = m[0]
    for index in range(len(m)):
        if (m[index + -1] == num1):
            return True
    return False


while True:
    lst = input("List: ")
    lst1 = lst.split()
    lst1 = [int(i) for i in lst1]
    if lst1:
        if len(lst1) <= 1:
            print(is_single(lst1))
        if len(lst1) > 1:
            print(is_prog(lst1))

