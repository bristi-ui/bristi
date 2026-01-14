import random

# Generate random number
secret_number = random.randint(1, 100)

attempts = 0
guess = None

print("Welcome to the Number Guessing Game!")
print("Guess a number between 1 and 100")

# Loop until correct guess
while guess != secret_number:
    guess = int(input("Enter your guess: "))
    attempts += 1

    if guess > secret_number:
        print("Too High!")

    elif guess < secret_number:
        print("Too Low!")

    else:
        print("Congratulations! You guessed the correct number.")
        print("Total attempts:", attempts)