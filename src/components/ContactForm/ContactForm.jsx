import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import css from 'components/ContactForm/ContactForm.module.css';



const initialValue = {
  name: '',
  number: '',
};

let userSchema = object({
  name: string().min(3).required(),
  number: number()
    .min(7)
    .max(7)
    .required(),
});



export function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  
  const handleChangeName = (evt) => {
        setName(evt.currentTarget.value);
  };

const handleChangeNumber = (evt) => {
        setNumber(evt.currentTarget.value);
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    const newContact = { id: nanoid(), name, number };

    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit(newContact);
    }
    setName('')
    setNumber('')
      };

    return (
      <Formik initialValues={initialValue} validationSchema={userSchema}>
        <Form className={css.form} onSubmit={handleSubmit}>
          <div className={css.form}>
            <p>Name</p>
            <Field
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChangeName}
            />
            <ErrorMessage name="name" component='div'/>
            <p>Number</p>
            <Field
              type="tel"
              name="number"
              value={number}
              
              required
              onChange={handleChangeNumber}
            />
            <ErrorMessage name="number" />
            <br></br>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    );
  }
