# Password Strength Checker

password = input("Enter your password: ")

has_upper = False
has_digit = False
has_special = False
special_chars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/"

# Check length
if len(password) < 8:
    print("Weak Password")
else:
    for ch in password:
        if ch.isupper():
            has_upper = True
        elif ch.isdigit():
            has_digit = True
        elif ch in special_chars:
            has_special = True

    if has_upper and has_digit and has_special:
        print("Strong Password")
    else:
        print("Weak Password")