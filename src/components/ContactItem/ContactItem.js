import css from './ContactItem.module.css';

import PropTypes from 'prop-types';

function ContactItem({ id, name, number, onDeleteBtn }) {
  return (
    <li className={css.contactsItem}>
      <p className={css.contactsText}>{name}:</p>
      <p className={css.contactsText}>{number}</p>
      <button
        onClick={() => {
          onDeleteBtn(id);
        }}
        className={css.contactsBtn}
        type="button"
        id={id}
      >
        Delete
      </button>
    </li>
  );
}

export { ContactItem };

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),

  onDeleteBtn: PropTypes.func.isRequired,
};
