f = input("Enter file name: ")

myFile = open(f, 'r')
myNum = myFile.read()
num = myNum.split()
res = [float(x) for x in list(num)]
res.sort()
n = len(res)
do_sum = sum(res)
average = do_sum / n

if n % 2 == 0:
    median1 = res[n//2]
    median2 = res[n//2 - 1]
    median = (median1 + median2)/2
else:
    median = res[[n//2]]


print("Average: {:.1f}".format(average))
print("median: " + str(median))

