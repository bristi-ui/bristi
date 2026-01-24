# Contact Book using Python (CLI based)

contacts = []   # List to store contact dictionaries

def add_contact():
    name = input("Enter name: ")
    phone = input("Enter phone number: ")
    email = input("Enter email: ")

    contact = {
        "name": name,
        "phone": phone,
        "email": email
    }

    contacts.append(contact)
    print("Contact added successfully!\n")

def view_contacts():
    if not contacts:
        print("No contacts available.\n")
    else:
        print("\n--- Contact List ---")
        for contact in contacts:
            print("Name:", contact["name"])
            print("Phone:", contact["phone"])
            print("Email:", contact["email"])
            print("--------------------")
        print()

def search_contact():
    search_name = input("Enter name to search: ")
    found = False

    for contact in contacts:
        if contact["name"].lower() == search_name.lower():
            print("\nContact Found:")
            print("Name:", contact["name"])
            print("Phone:", contact["phone"])
            print("Email:", contact["email"])
            found = True
            break

    if not found:
        print("Contact not found.\n")

def delete_contact():
    delete_name = input("Enter name to delete: ")

    for contact in contacts:
        if contact["name"].lower() == delete_name.lower():
            contacts.remove(contact)
            print("Contact deleted successfully!\n")
            return

    print("Contact not found.\n")

# Main Menu
while True:
    print("==== Contact Book Menu ====")
    print("1. Add New Contact")
    print("2. View All Contacts")
    print("3. Search Contact by Name")
    print("4. Delete Contact")
    print("5. Exit")

    choice = input("Enter your choice (1-5): ")

    if choice == "1":
        add_contact()
    elif choice == "2":
        view_contacts()
    elif choice == "3":
        search_contact()
    elif choice == "4":
        delete_contact()
    elif choice == "5":
        print("Exiting Contact Book. Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.\n")