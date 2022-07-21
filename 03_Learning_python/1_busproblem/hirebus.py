#A rugby team has 15 players. A bus company has only big buses that can carry 38 passengers. Write a program that the tournament organiser can use to calculate the number of big buses that should be hired.

import math
from urllib.parse import _ResultMixinBytes
passengers = 38
rugbyTeam = 15

numberOfTeam = int(input("How many teams are there? "))
result = numberOfTeam * rugbyTeam / passengers

# Use math.ceil to return the smallest integral value greater than the number but if the number is already an integer, same number will be returned
print("Number of big buses required =", math.ceil((result)))


