# The Unix tool tail prints only the bottom few lines of a file. Write your own version of tail that prompts for the name of the file to read, and the number of lines to print.

lear_file = input("Enter file name: ")
lines = int(input("line: "))

myFile = open(lear_file, 'r')
myStr = myFile.readlines()
for i in myStr[lines:]:
    print(i, end="")
myFile.close

#issue: only prints the last paragraph instead of the numbers of lines entered.