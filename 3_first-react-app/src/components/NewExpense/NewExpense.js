import React, { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
   const [isForm, setIsForm] = useState(false);

   const saveExpenseDataHandler = (data) => {
      const expenseData = {
         ...data,
         id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      setIsForm(false);
   };

   const closeBtnHandler = () => setIsForm(false);

   const addExpenseBtnHandler = () => setIsForm(true);

   const content = !isForm ? (
      <button onClick={addExpenseBtnHandler}>Add Expense</button>
   ) : (
      <ExpenseForm onCloseBtnClick={closeBtnHandler} onSaveExpenseData={saveExpenseDataHandler} />
   );

   return <div className="new-expense">{content}</div>;
};

export default NewExpense;
