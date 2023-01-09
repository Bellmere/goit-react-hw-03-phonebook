import css from '../ContactList/ContactList.module.css';
import propTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.contact__list}>
            {contacts.map((contact, id) => (
                <li key={id} className={css.contact__list__item}>
                    <span>{contact.name} :</span>
                    <span>{contact.number}</span>
                    <button
                    className={css.contact__list__btn} 
                    type='button'
                    onClick={() => onDelete(contact.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
      })
    ),
    onDelete: propTypes.func,
  };