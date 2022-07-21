#There are three candidates standing for Lord Mayor of Wobatville, Angus, Betty, and Cathy. If in the first round of voting, no canditate has more than 50% of the votes another round of voting will be required. Write a program that inputs the numbers of votes for each candidate in the first election and declares its result, either: • the name of the outright winner, or • the names of the two or three candidates to be voted on in the next round of voting.

# no more than 50% of vote - another round is required
#write input for each candidates
#results: outright winner OR name of 2 or 3 candidates to be voted in the next round of voting

angus = int(input("How many votes for Angus? "))
betty = int(input("How many votes for Betty? "))
cathy = int(input("How many votes for Cathy? "))
result = angus + betty + cathy


if angus > (result / 2):
  print("Angus Wins")
elif angus < betty and angus < cathy:
  print("Betty and Cathy Advances")
elif betty > (result / 2):
  print(("Betty Wins"))
elif betty < angus and betty < cathy:
  print("Angus and Cathy Advances")
elif cathy > (result / 2):
  print("Cathy Wins")
elif cathy < angus and cathy < betty:
  print("Angus and Betty Advances")
else:
  print("Next Round: Angus, Betty Cathy advances")


#Next challenge to do - add loop for next round if all candidates has no more than 50% vote 