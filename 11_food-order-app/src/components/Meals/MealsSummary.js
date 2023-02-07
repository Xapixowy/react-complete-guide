import React from 'react';

import styles from './MealsSummary.module.css';

const MealsSummary = () => {
   return (
      <section className={styles.summary}>
         <h2>Delicious Food, Delived to You</h2>
         <p>
            Choose your favourite meal from our breoad selection of available meals and enjot a delicious lunch or
            dinner at home.
         </p>
         <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </section>
   );
};

export default MealsSummary;
