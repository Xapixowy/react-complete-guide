import React from 'react';

import styles from './UsersList.module.css';

import UserItem from './UserItem';

const UsersList = (props) => {
   const users = [...props.data];

   return (
      <div className={styles['users-list']}>
         {users.map((user) => (
            <UserItem key={user.id} id={user.id} username={user.username} age={user.age} onUserDel={props.onUserDel} />
         ))}
      </div>
   );
};

export default UsersList;
