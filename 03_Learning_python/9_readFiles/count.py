# The Unix tool wc counts the numbers of characters, words and lines in a file. Write your own version of wc that prompts for the name of the file to read, then prints the counts.
#Hint: You don’t need to store all the lines in memory before counting.

path = input("File name: ")

num_of_lines = 0
num_of_chars = 0
num_of_words = 0

with open(path, 'r') as lear_file:
    for myLine in lear_file:
        num_of_lines += 1
        num_of_chars += len(myLine)
        numwords = myLine.split()
        num_of_words += len(numwords)
    pos = 'out'
    for c in myLine:
        if c != ' ' and pos == 'out':
            pos = 'in'
        elif c == ' ':
            pos = 'out'

print("Characters:", num_of_chars)
print("Words:", num_of_words)
print("Lines:", num_of_lines)
lear_file.close()