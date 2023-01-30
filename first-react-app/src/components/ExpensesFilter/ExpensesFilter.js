import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
   const [expensesFilter, setExpensesFilter] = useState('2022');

   const expensesFilterSelectHandler = (e) => {
      setExpensesFilter(e.target.value);
      props.onFilterChange(e.target.value);
   };

   return (
      <div className="expenses-filter">
         <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={expensesFilter} onChange={expensesFilterSelectHandler}>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
            </select>
         </div>
      </div>
   );
};

export default ExpensesFilter;
