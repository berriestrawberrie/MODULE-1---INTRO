var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//declare an empty array of contact objects
var contacts = [];
//function to add a new contact
function addContact(name, email, phone, tags) {
    var id = contacts.length;
    var verifiedEmail = validateEmail(email);
    if (verifiedEmail) {
        //check if optional information provided, if not assign default values
        var newContact = {
            id: id,
            name: name,
            email: email ? email : "none",
            phone: phone ? phone : "none",
            tags: tags ? tags : ["none"]
        };
        contacts.push(newContact);
    }
    else {
        console.log("".concat(email, ": Invalid email format must contain @ and a period. Contact not added."));
    }
} //end of addContact function
function validateEmail(email) {
    if (email) {
        //VERIFY EMAIL CONTAINS "@" AND "."
        if (email.includes("@") && email.includes(".")) {
            //EMAIL EXISTS AND VALID
            return true;
        }
        else {
            return false;
        }
    }
    else {
        //EMAIL DOES NOT EXIST, OPTIONAL FIELD
        return true;
    }
}
//function to list all contacts
function listContacts(data) {
    data.forEach(function (contact) {
        var _a;
        console.log("CONTACT ID: ".concat(contact.id, ", \n            Name: ").concat(contact.name, ", \n            Email: ").concat(contact.email, ", \n            Phone: ").concat(contact.phone, ", \n            Tags: ").concat((_a = contact.tags) === null || _a === void 0 ? void 0 : _a.join(", ")));
    });
} //end of listContacts function
//search function to find contacts by name
function findByName(name) {
    return contacts.filter(function (contact) { return contact.name.toLowerCase().includes(name.toLowerCase()); });
} //end of findByName function
//REMOVE BY ID FUNCTION
function removeById(id) {
    //find the index of the contact with the given id
    var index = contacts.findIndex(function (contact) { return contact.id === id; });
    //if index is found in contacts remove that contact
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(listContacts(contacts));
        return true;
    }
    else {
        console.log("Contact with ID ".concat(id, " not found. No contact removed."));
        return false;
    }
} //end of removeById function
//UPDATE CONTACT FUNCTION
function updateContact(id, patch) {
    var index = contacts.findIndex(function (contact) { return contact.id === id; });
    if (index !== -1) {
        //CONTACT FOUND, UPDATE THE CONTACT OVERWRITE ASSERT TYPE AS CONTACT
        var updatedContact = __assign(__assign({}, contacts[index]), patch);
        //OVERWRITE THE CONTACT IN THE CONTACTS ARRAY
        contacts[index] = updatedContact;
        console.log(listContacts(contacts));
    }
    else {
        console.log("Contact with ID ".concat(id, " not found. No update performed."));
    }
} //END OF UPDATE CONTACT FUNCTION
//TESTING THE FUNCTIONS
console.log("---TASK1: ADDING CONTACTS TEST---\n    1. \"John Doe\", \"brooke@emailc.com\", \"123-456-7890\", [\"friend\",\"work\"]\n    2. \"Jane Smith\", \"random@email.comm\"\n    3. \"Alice Johnson\", undefined, \"987-654-3210\", [\"family\"]\n    --no print output expected--");
addContact("John Doe", "brooke@emailc.com", "123-456-7890", ["friend", "work"]);
addContact("Jane Smith", "random@email.comm");
addContact("Alice Johnson", undefined, "987-654-3210", ["family"]);
console.log("---TASK2: LISTING TEST---");
console.log(contacts);
console.log("\n---TASK3: SEARCH BY NAME---\n    Searching for \"John\":");
console.log(findByName("John"));
console.log("\n---TASK4: REMOVE BY ID AND SHOW NEW LIST---\n    Removing contact with ID 2 and 5:\n    ");
removeById(1);
removeById(5);
console.log("\n---MEDIUM LEVEL: UPDATE CONTACT---\n    Update Contact 0 with email:john.doe@email.com and tags: colleague\n    ");
updateContact(0, { email: "john.doe@email.com", tags: ["colleague"] });
updateContact(4, { email: "john.doe@email.com", tags: ["colleague"] });
console.log("\n---MEDIUM LEVEL: VALID EMAIL---\n    Verify that email\n    1.\"Email Tester\", \"test@email.comm\"\n    2.\"Email Invalid\", \"testemail.com\"\n    ");
addContact("Email Tester", "test@email.comm");
addContact("Email Invalid", "testemail.com");
listContacts(contacts);
