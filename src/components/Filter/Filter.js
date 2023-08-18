import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { Input } from '@chakra-ui/react';

function Filter() {
  const dispatch = useDispatch();
  const inputValue = evt => {
    const value = evt.target.value;
    console.log(value);

    dispatch(setFilter(value));
  };

  return (
    <>
      <h2 className={css.filterTitle}>Contacts</h2>
      <label className={css.contactsLabel}>
        Find contacts by name
        <Input
          name="filter"
          className={css.contactsInput}
          onChange={inputValue}
          type="text"
        ></Input>
      </label>
    </>
  );
}

export { Filter };
