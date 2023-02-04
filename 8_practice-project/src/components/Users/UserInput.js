import React, { useState } from 'react';

import styles from './UserInput.module.css';

import Modal from '../General/Modal';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UserInput = (props) => {
   const { onUserAdd } = props;

   const [isPrompt, setIsPrompt] = useState(false);
   const promptDismissFn = () => setIsPrompt(false);

   const [username, setUsername] = useState('');
   const [age, setAge] = useState(0);

   const usernameInputHandler = (e) => setUsername(e.target.value);
   const ageInputHandler = (e) => setAge(parseInt(e.target.value));
   const formSubmitHandler = (e) => {
      e.preventDefault();
      if (!username) setIsPrompt(true);
      else {
         onUserAdd(username, age);
         setUsername('');
         setAge(0);
      }
   };

   return (
      <Card className={styles['user-input']}>
         <form className={styles['user-input__form']} onSubmit={formSubmitHandler}>
            <div className={styles['user-input__input']}>
               <label>Username</label>
               <input type="text" onChange={usernameInputHandler} value={username}></input>
            </div>
            <div className={styles['user-input__input']}>
               <label>Age (years)</label>
               <input type="number" min="0" step="1" onChange={ageInputHandler} value={age}></input>
            </div>
            <div className={styles['user-input__controls']}>
               <Button type="submit">Add User</Button>
            </div>
         </form>
         {isPrompt && (
            <Modal
               title="Invalid input"
               description="Please enter a valid name (non-empty value)."
               dismissFn={promptDismissFn}
            />
         )}
      </Card>
   );
};

export default UserInput;
