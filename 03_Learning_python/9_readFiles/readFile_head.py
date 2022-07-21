# The Unix tool head prints only the top few lines of a file. Write your own version of head that prompts for the name of the file to read, and the number of lines to print. 
# Hint: You don’t need to store all the lines in memory before printing them.

lear_file = open('string/Lear.txt', 'r')
myStr = lear_file.readlines()

lines = int(input("line: "))
for i in myStr[:lines]:
    print(i, end="")
lear_file.close