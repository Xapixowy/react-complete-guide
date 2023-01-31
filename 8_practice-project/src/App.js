import React, { useState } from 'react';

import styles from './App.module.css';

import UserInput from './components/UserInput';
import UsersList from './components/UsersList';

const DUMMY_DATA = [
   { id: 1, username: 'Szymon', age: 24 },
   { id: 2, username: 'Filip', age: 24 },
   { id: 3, username: 'Michał', age: 26 },
   { id: 4, username: 'Maciej', age: 26 },
   { id: 8, username: 'Jakub', age: 23 },
];

const App = () => {
   const [users, setUsers] = useState(DUMMY_DATA);

   const addUser = (username, age) => {
      console.log(typeof username, typeof age);
      setUsers([
         ...users,
         {
            id: users[users.length - 1].id + 1,
            username: username,
            age: age,
         },
      ]);
   };

   const delUser = (id) => {
      const newUsers = [...users];
      newUsers.splice(
         newUsers.findIndex((user) => user.id === id),
         1,
      );
      setUsers(newUsers);
   };

   return (
      <div className={styles.users}>
         <UserInput onUserAdd={addUser} />
         <UsersList onUserDel={delUser} data={users} />
      </div>
   );
};

export default App;
