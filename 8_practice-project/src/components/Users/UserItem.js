import React from 'react';

import styles from './UserItem.module.css';

const UserItem = (props) => {
   const { id, username, age, onUserDel } = props;

   const itemClickHandler = () => {
      onUserDel(id);
   };

   return (
      <div className={styles['user-item']} onClick={itemClickHandler}>
         <span className={styles['user-item__username']}>{username}</span> ({age} years old)
      </div>
   );
};

export default UserItem;
