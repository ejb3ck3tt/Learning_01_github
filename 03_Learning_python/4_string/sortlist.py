#Write a program that reads strings typed by the user until an empty string in entered, then prints all of the strings sorted into ascending order.

# Hint: use the sentinel to save all the input strings into a list, then sort it with a method.

list = [""]

while True:
  text = input("Enter a string: ")
  if text:
    if text != " ":
      list.append(text)
      list.sort()
      listToStr = '\n'.join([str(text) for text in list])
  else:
    break

print(listToStr)