import React from 'react';

import styles from './UsersList.module.css';

import Card from '../UI/Card';
import UserItem from './UserItem';

const UsersList = (props) => {
   const users = [...props.data];

   return (
      <Card className={styles['users-list']}>
         {users.map((user) => (
            <UserItem key={user.id} id={user.id} username={user.username} age={user.age} onUserDel={props.onUserDel} />
         ))}
      </Card>
   );
};

export default UsersList;
