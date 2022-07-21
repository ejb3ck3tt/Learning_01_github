#A small concert theatre for chamber music has seating for 100 guests. Write a program that the box office can use to make sure only 100 seats are sold. It should look like this when run.

#sample run
# Seats remaining: 100. How many in your group? 40 
# Booked, thank you. 
# Seats remaining: 60. How many in your group? 39 
# Booked, thank you. 
# Seats remaining: 21. How many in your group? 20 
# Booked, thank you. 
# Seats remaining: 1. How many in your group? 5 
# Sorry, not enough seats left. 
# Seats remaining: 1. How many in your group? 1 
# Booked, thank you. SOLD OUT!

seats = 100
while seats > 0:
    print("Seats remaining:", seats)
    group = int(input("How many in your group? "))
    while group > seats:
        print("Sorry, not enough seats left")
        group = int(input("Seats remaining: " + str(seats) + " How many in your group? "))
    seats -= group
    if seats == 0:
        print("Booked, Thank you. SOLD OUT!")
    else:
        print("Booked. Thank you")