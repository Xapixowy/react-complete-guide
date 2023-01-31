import React from 'react';

import styles from './Prompt.module.css';

const Prompt = (props) => {
   const { title, description, dismissFn } = props;

   return (
      <div className={styles.prompt__wrapper}>
         <div className={styles.prompt__background} onClick={dismissFn}></div>
         <div className={styles.prompt}>
            <div className={styles.prompt__header}>
               <h1>{title}</h1>
            </div>
            <div className={styles.prompt__description}>
               <p>{description}</p>
            </div>
            <div className={styles.prompt__controls}>
               <button onClick={dismissFn}>Okay</button>
            </div>
         </div>
      </div>
   );
};

export default Prompt;
