import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import css from 'components/Filter/Filter.module.css';


const initialValue = {
  filter:''
}

export function Filter (onChange){
  const [filter, setFilter] = useState('')
  
  const handleChange = (evt) => {
    setFilter(evt.currentTarget.value );
    onChange(evt.currentTarget.value);
  };



    return (
      <div>
        <h3>Find contacts by name</h3>

        <Formik initialValues={initialValue} >
          <Form>
          <label htmlFor="find">Find
            <Field
              className={css.input}
              type="text"
              name="filter"
              value={filter}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            ></Field>
          </label>
        </Form></Formik>
        
      </div>
    );

}


    
  
