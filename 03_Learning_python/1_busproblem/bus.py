#A basketball team has 15 players. A bus company has small buses that can carry 10 passengers, and big buses that can carry 38 passengers. The basketball tournament organiser can afford to hire 3 big buses and 2 small buses. How many teams can be taken to the tournament?

bballTeam = 15
bigBus = 38
smallBus = 10

bigBusNum = float(input("how many big buses? "))
smallBusNum = float(input("how many small buses? "))

# floor division is used which divides two numbers and rounds the result down to the nearest integer.
print("Number of teams =", (bigBus * bigBusNum + smallBus * smallBusNum)//bballTeam)

