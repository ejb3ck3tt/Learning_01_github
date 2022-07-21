# find the duplicate between x and y
# Sample test
# 1 1 3; 1 1 6    | [1]
# 2 2 4; 2 2 5    | [2]

def find_dup(seq):
  check = set()
  check_add = check.add
  check_twice = set(x for x in seq if x in check or check_add(x))
  return list(check_twice)

while True:
    x,y = input("value: ").split(";")
    x = x.split()
    y = y.split()
    x = [int(i) for i in x]
    y = [int(i) for i in y]
    dupx = (find_dup(x))
    dupy = (find_dup(y))
    jointdup = dupx + dupy
    print(find_dup(jointdup))
