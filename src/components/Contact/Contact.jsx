import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={css.contactDataContainer}>
        <p className={css.contactData}>
          <FaUser /> {name}
        </p>
        <p className={css.contactData}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
