let contacts = [
    { name: "Jay", phone: "0712345678"},
    { name: "Ray", phone: "0787654321"}
];

let running = true;

while (running) {
    let choice = prompt(
        " Contact Book\n1. View Contacts\n2. Add Contact\n3. Search Contact\n4. Exit\nEnter option number:"
    );
    if (choice === "1") {
        viewContacts();
    } else if (choice === "2") {
        addContact();
    } else if (choice === "3") {
        searchContact();
    } else if (choice === "4") {
        running = false;
        alert("Exiting Contact Book. Goodbye!");
    } else {
        alert("Invalid option. Try again.");
    }
}

function viewContacts() {
    if(contacts.length === 0) {
        alert("No contacts available.");
        return;
    }
    let message = "Your Contacts:\n";
    for (let i = 0; i < contacts.length; i++) {
        message +=(i + 1)+"."+ contacts[i].name +"-"+ contacts[i].phone+"\n";
    }
    alert(message);
}

function addContact() {
    let name = prompt("Enter Contact name:");
    let phone = prompt("Enter phone number:");
    contacts.push({name:name,phone:phone});
    alert("Contact added successfully!")
}

function searchContact() {
    let searchName = prompt("Enter name to search:");
    let found = false;

    for(let i = 0;i < contacts.length; i++) {
        if(contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
            alert("Found:" + contacts[i].name +"-"+ contacts[i].phone);
            found = true;
            break; 
        }
    }

    if(!found) {
        alert("Contact not found.")
    }
}
