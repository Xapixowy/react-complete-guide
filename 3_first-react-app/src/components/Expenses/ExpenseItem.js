import React, { useState } from 'react';

import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title);
   const { date, price } = props;

   const clickHandler = () => {
      setTitle(title + '🐓');
   };

   return (
      <Card className="expense-item">
         <div>
            <ExpenseDate date={date} />
         </div>
         <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${price}</div>
         </div>
         <button onClick={clickHandler} className="expense-item__button">
            Add 🐓
         </button>
      </Card>
   );
};

export default ExpenseItem;
