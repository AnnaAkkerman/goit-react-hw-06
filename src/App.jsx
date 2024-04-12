import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(
  //     window.localStorage.getItem("saved-contacts")
  //   );
  //   return savedContacts ? savedContacts : initialContacts;
  // });

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };

  // const [filter, setFilter] = useState("");
  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
