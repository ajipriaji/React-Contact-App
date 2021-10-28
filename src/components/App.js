import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './Header'
import AddContact from './Addcontact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STRORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); 

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(()=> {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STRORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(()=> {
    localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact component={()=> (
              <ContactList contacts={contacts} getContactId={removeContactHandler}/> 
            )} 
          />
          <Route 
            path="/add" 
            component={() => (
              <AddContact addContactHandler={addContactHandler}/> 
            )} 
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
