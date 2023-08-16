import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const inputValue = evt => {
    const value = evt.target.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <h2 className={css.filterTitle}>Contacts</h2>
      <label className={css.contactsLabel}>
        Find contacts by name
        <input
          name="filter"
          className={css.contactsInput}
          onChange={inputValue}
          type="text"
        ></input>
      </label>
    </>
  );
}

export { Filter };