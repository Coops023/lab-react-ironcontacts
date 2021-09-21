import contacts from "./contacts.json";
import './App.css';
import React, {useState} from 'react'


function App() {
 
const [contactsArray, setContactsArray] = useState(contacts.slice(0,5))
console.log("line 9", contactsArray)

//finds random contact
const randomContact = contacts[Math.floor(Math.random()*contacts.length)]
//use this syntax to add to setArray VVVVV
// setValue([...value,newvalue]);
//adds random contact
const addRandom = () => setContactsArray([...contactsArray, randomContact])

const sortedByName = () => setContactsArray([...contactsArray].sort((a, b) => a.name.localeCompare(b.name)))

const sortedByPopularity = () => setContactsArray([...contactsArray].sort((a, b) =>{
  return b.popularity-a.popularity
}))

const deleteElement = (id) => setContactsArray([...contactsArray].filter(contact => contact.id !== id));

// console.log("line 22", sortedArray)

// const sortByName = () => setContactsArray([...contactsArray, sortedArray])

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandom}
      className="btn-add">Add Random Contact</button>

       <button onClick={sortedByName}
      className="btn-sort-name">Sort by name</button> 

      <button onClick={sortedByPopularity}
      className="btn-sort-popularity">Sort by popularity</button>
      
      <table>
      <tr>
        <td><h2>Picture</h2></td>
        <td><h2>Name</h2></td>
        <td><h2>Popularity</h2></td>
        <td><h2>Action</h2></td>
      </tr>
      
        {contactsArray.map((contact)=>(
      <tr>
        <td>
          <img src={contact.pictureUrl}></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}
          </td>
          <td><button onClick={() => deleteElement(contact.id)}
      className="btn-delete">Delete</button>
          </td>
      </tr>
        ))}
  
      </table> 
    </div>
  );
}

export default App;
