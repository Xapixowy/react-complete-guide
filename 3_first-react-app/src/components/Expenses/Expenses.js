import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
   const [expensesFilter, setExpensesFilter] = useState('2022');
   const [expenses, setExpenses] = useState(
      props.expenses.filter((item) => item.date.getFullYear() === parseInt(expensesFilter)),
   );

   const filterChangeHandler = (filter) => {
      setExpensesFilter(filter);
      setExpenses(props.expenses.filter((item) => item.date.getFullYear() === parseInt(filter)));
   };

   return (
      <Card className="expenses">
         <ExpensesFilter selected={expensesFilter} onFilterChange={filterChangeHandler} />
         <ExpensesChart expenses={expenses} />
         <ExpensesList items={expenses} />
      </Card>
   );
};

export default Expenses;
