#A salesperson in a camera shop earns a base wage of $30.25 per hour up to their normal work week of 37 hours. Only whole hours are counted. If they work more hours than that (overtime) they get paid at 1.5 times their normal rate for the overtime. If they sell more than $3000.00 worth of camera gear in the week, they get a bonus of 3% of the sales over the $3000.00 minimum. Write program to calculate the wages plus bonus for a salesperson in a week.

baseWage = 30.25
overtime = baseWage * 1.5

hoursWorked = int(input("How many worked hours? "))
if hoursWorked <= 37:
  pay = hoursWorked * baseWage
else:
  pay = (37 * baseWage) + ((hoursWorked-37) * overtime)

totalSales = int(input("What is your total sales for the week? "))
if totalSales > 3000:
  bonus = (totalSales - 3000) * 0.03
  print("Your total pay with bonus is", pay + bonus)
else:
  print("Your total pay is ", pay )

