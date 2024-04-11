import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
            <Contact name={name} number={number} id={id} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
