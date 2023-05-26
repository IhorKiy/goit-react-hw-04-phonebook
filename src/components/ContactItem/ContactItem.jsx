import React from 'react';
import css from 'components/ContactItem/ContactItem.module.css'

export function ContactItem({id,name, number, onSubmit}) {


  
  const handleProps = (e) => {
    e.preventDefault();
           onSubmit(name);
  };

     
    return (
      <>
        <li className={css.item} key={id}>
          <p className={css.item__name}>{name}</p>
          <p className={css.item__number}>{number}</p>
          <button className={css.item__buttom} type="submit" onClick={handleProps}>
            Delete
          </button>
        </li>
      </>
    );
  
}
 
