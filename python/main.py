# Main Page
print("\nMain Page\n")

# Lists
fruits = ['apples', 'oranges', 'grapes']
cars = [ ["Buick", 10], ["Corvette", 1], ["Toyota", 4]]

# print("Buicks: ", cars[0])
# print("Count of Buicks: ", cars[0][1])

# Key/Value structures
email = {
    "From": "j.smith@example.com",
    "To": "zed.shaw@example.com",
    "Subject": "I HAVE AN AMAZING INVESTMENT FOR YOU!!!"
    }

print(email['From'])

# List with Data Objects
messages = [
    {"to": 'Sun', "from": 'Moon', "message": 'Hi!'},
    {"to": 'Moon', "from": 'Sun', "message": 'What do you want Sun?'},
    {"to": 'Sun', "from": 'Moon', "message": "I'm awake!"},
    {"to": 'Moon', "from": 'Sun', "message": 'I can see that Sun.'}
    ]

print(messages[0]['to'])