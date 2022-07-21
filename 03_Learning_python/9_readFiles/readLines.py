#Enter the name of file and the number of lines then print the text per line as per the input number.

trace_file = input("Enter file name: ")
lines = int(input("line: "))

myFile = open(trace_file, 'r')
myStr = myFile.readlines()
for i in myStr[:lines]:
    print(i, end="")
myFile.close