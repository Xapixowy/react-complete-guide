import React, { useState } from 'react';

import './ExpensesList.css';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const ExpensesList = (props) => {
   const [expenses, setExpenses] = useState(props.expenses);

   const filterChangeHandler = (filter) => {
      setExpenses(props.expenses.filter((item) => item.date.getFullYear() === parseInt(filter)));
   };

   return (
      <div>
         <ExpensesFilter onFilterChange={filterChangeHandler} />
         <Card className="expenses-list">
            {expenses.map((item) => (
               <ExpenseItem key={item.id} date={item.date} title={item.title} price={item.amount}></ExpenseItem>
            ))}
         </Card>
      </div>
   );
};

export default ExpensesList;
