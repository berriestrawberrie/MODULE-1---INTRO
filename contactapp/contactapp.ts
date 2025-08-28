
//define the contact interface
interface Contact { 
    id: number; 
    name: string; 
    email?: string | undefined; 
    phone?: string | undefined; 
    tags?: string[] | undefined; // e.g. ['family','work'] 
    }

    
//declare an empty array of contact objects
const contacts: Contact[] = []; 

//function to add a new contact
function addContact(name: string, email?: string, phone?: string, tags?:string[]):void  {
    //generate a unique id that accounts for deleted contacts
    const maxID:number = Math.max(...contacts.map(data=>data.id));
    const id = Math.max(contacts.length, maxID+1);
    //validate email format
    const verifiedEmail = validateEmail(email);

    if(verifiedEmail){
        //check if optional information provided, if not assign default values
        const newContact: Contact ={
            id: id, 
            name: name, 
            email: email? email : "none",
            phone: phone? phone : "none",
            tags: tags? tags : ["none"]
        }
        contacts.push(newContact);
    }else{
        console.log(`${email}: Invalid email format must contain @ and a period. Contact not added.`);
    }

} //end of addContact function

function validateEmail(email?:string): boolean{
     
    if(email){
        //VERIFY EMAIL CONTAINS "@" AND "."
        if(email.includes("@") && email.includes(".")){
            //EMAIL EXISTS AND VALID
            return true;
        }else{
            return false;
        }
    }else{
        //EMAIL DOES NOT EXIST, OPTIONAL FIELD
        return true
    }
}

//function to list all contacts
function listContacts(data: Contact[]) :void{
    data.forEach(contact => {
        console.log(`CONTACT ID: ${contact.id}, 
            Name: ${contact.name}, 
            Email: ${contact.email}, 
            Phone: ${contact.phone}, 
            Tags: ${contact.tags?.join(", ")}`);
    });
}//end of listContacts function

//search function to find contacts by name
function findByName(name: string): Contact[] {
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
}//end of findByName function


//REMOVE BY ID FUNCTION
function removeById(id: number): boolean{

    //find the index of the contact with the given id
    const index = contacts.findIndex(contact => contact.id === id); 

    //if index is found in contacts remove that contact
    if(index !== -1){ 
        contacts.splice(index,1);
        console.log(listContacts(contacts));
        return true;
    }else{
        console.log(`Contact with ID ${id} not found. No contact removed.`);
        return false;
    }

}//end of removeById function


//UPDATE CONTACT FUNCTION
function updateContact(id: number, patch: Partial<Contact>){
   const index = contacts.findIndex(contact => contact.id === id);
    if(index !== -1){
        //CONTACT FOUND, UPDATE THE CONTACT OVERWRITE ASSERT TYPE AS CONTACT
        const updatedContact = {...contacts[index], ...patch} as Contact; 
        //OVERWRITE THE CONTACT IN THE CONTACTS ARRAY
        contacts[index] = updatedContact;
        console.log(listContacts(contacts));
    }else{
        console.log(`Contact with ID ${id} not found. No update performed.`);
    }


}//END OF UPDATE CONTACT FUNCTION

function search(term:string): Contact[]{
   return contacts.filter(contact => 
    contact.name.toLowerCase().includes(term.toLowerCase()) ||
    contact.email?.toLowerCase().includes(term.toLowerCase()) ||
    contact.phone?.toLowerCase().includes(term.toLowerCase())
    );  
}
//ADD THE CONTACTS FOR TESTING
    addContact("John Doe", "brooke@emailc.com", "123-456-7890", ["friend","work"]);
    addContact("Jane Smith", "Bob@email.comm");
    addContact("Alice Johnson", undefined, "987-BOB-3210", ["family"]);
    addContact("Bob Burger", "", "", undefined); 

//TESTING THE FUNCTIONS
console.log(`---TASK1: ADDING CONTACTS TEST---
    1. "John Doe", "brooke@emailc.com", "123-456-7890", ["friend","work"]
    2. "Jane Smith", "random@email.comm"
    3. "Alice Johnson", undefined, "987-654-3210", ["family"]
    --no print output expected--`);


console.log(`---TASK2: LISTING TEST---`);
console.log(contacts);

console.log(`
---TASK3: SEARCH BY NAME---
    Searching for "John":`);
console.log(findByName("John"));
console.log(`
---TASK4: REMOVE BY ID AND SHOW NEW LIST---
    Removing contact with ID 0 and 5:
    `);
removeById(0);
removeById(5);

console.log(`
---MEDIUM LEVEL: UPDATE CONTACT---
    Update Contact 0 with email:john.doe@email.com and tags: colleague
    `);
updateContact(0, {email: "john.doe@email.com", tags:["colleague"] }); 
updateContact(4, {email: "john.doe@email.com", tags:["colleague"] }); 

console.log(`
---MEDIUM LEVEL: VALID EMAIL---
    Verify email before adding contact, invalid email should not be added:
    1."Email Tester", "test@email.comm"
    2."Email Invalid", "testemail.com"
    `);
    addContact("Email Tester", "test@email.comm");
    addContact("Email Invalid", "testemail.com");
    listContacts(contacts);


console.log(`
---MEDIUM LEVEL: SEARCH TERM---
    Find email , name or phone containing "Bob":
    `);
    console.log(search("Bob"));