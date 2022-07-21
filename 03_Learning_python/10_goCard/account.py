from GoCard import *

def badcom():
    print("Bad command.")
    return

stmtList = []
currBalance = []
amt = []
costTopup = []
try:
    openAcct = float(input("Creating account. Input initial balance: "))
    balance = GoCard(openAcct)
    print(balance.currBalance)
    while True:
        commInput = input("?? ") #user input command and number t 20
        userInput = commInput.split() #splits the command and number
        if userInput[0] == "r" or userInput[0] == "t" or userInput[0] == "b" or userInput[0] == "q": 
            if userInput[0] == "r":
                desc = "Ride"
                rideCosting = float(userInput[1]) #the amount
                amtList = balance.ride(rideCosting)
                amt.append(str(amtList))
                stmtList.append(desc)
                costTopup.append(str(rideCosting))
            if userInput[0] == "t":
                desc = "Top Up"
                topUp = float(userInput[1])
                amtList = balance.top(topUp)
                amt.append(amtList)
                stmtList.append(desc)
                costTopup.append(str(topUp))
            if userInput[0] == "b":
                print("balance =", balance.currBalance)
            if userInput[0] == "q":
                print("statement:")
                #:> right aligned, :< left aligned
                print("Event {:>20s} {:<20} Balance $".format("amount", "($)"))
                print("Initial Balance {:>40s} {:<20} ".format(str(openAcct), ""))
                for i in range(len(stmtList)):
                    print("{}{:>20s}{:>30s}".format(stmtList[i], costTopup[i], str(amt[i])))
                print("Final balance{:>41s}".format(str(balance.currBalance)))
                break
        else:
            # call error
            badcom()
except:
    badcom()


#Test input
#input balance: 50
#r 10 | ride
#t +10 | topup
#b | balance
