#Write a program that prompts for and reads strings until an empty string is entered, then prints the longest string that was entered. The output must match the punctuation in this example exactly 

#sample run
#Enter a string: Mrs Jaypher said, ’It’s safer 
# Enter a string: If you’ve lemons in your head; 
# Enter a string: First to eat, a pound of meat, 
# Enter a string: And then to go at once to bed. 
# Enter a string: Eating meat is half the battle, 
# Enter a string: Till you hear the Lemons rattle! 
# Enter a string: If you don’t, you’ll always moan, 
# Enter a string: In a Lemoncolly tone;
# Enter a string: For there’s nothing half so dreadful, 
# Enter a string: as Lemons in your head. 
# Enter a string: Longest was: ’For there’s nothing half so dreadful,’
# $

 
maxWord = ""
while True:
    text = input("Enter a string: ")
    if text:
        if len(text) >= len(maxWord):
            maxWord = text
    else:
        break

print(f"longest was: '{maxWord}'")



