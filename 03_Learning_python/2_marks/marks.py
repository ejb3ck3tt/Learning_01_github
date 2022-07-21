# The grades at Koala University are awarded based on the number of marks awarded for the course out of 100. Marks of 90 or 46
# above receive the grade of “gum leaf cluster”. Marks less than that but of 60 or above receive the grade of “leafy twig”. Marks less than that but of 45 or above receive the grade of “gum leaf”. Anything less gets the grade of “dead twig”. Write a program that asks the user for a number of marks, and prints the grade awarded.


mark = int(input("How many marks? "))

if mark >= 101:
  print("please provide a valid mark update to 100 only")
elif mark >= 90:
  print("Gum Leaf Cluster")
elif mark >= 60:
  print("Leafy Twig")
elif mark >= 45:
  print("Gum Leaf")
else: 
  print("Dead Twig")