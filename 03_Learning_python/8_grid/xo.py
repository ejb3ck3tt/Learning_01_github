# Define rows and column then print a grid of alternating characters.
# Example:
# XOXO
# OXOX

rows = int(input("How many rows: ")) 
column = int(input("How many column: ")) 
theme = ""
count = 0
for i in range(rows):
    for j in range(1, column + 1):
        count += 1
        if ((i + j) % 2) != 0:
            theme += "X"
        if ((i + j) % 2) == 0:
            theme += "O"
        if count == column:
            theme += '\n'
            count = 0 
            
print(theme)