import React from 'react';

import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
   let filteredExpenses;
   if (props.items.length) {
      filteredExpenses = props.items.map((item) => (
         <ExpenseItem key={item.id} date={item.date} title={item.title} price={item.amount}></ExpenseItem>
      ));
   } else {
      filteredExpenses = <p className="expenses-list__no-expenses">No expenses found!</p>;
   }

   return <ul className="expenses-list">{filteredExpenses}</ul>;
};

export default ExpensesList;
