import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

import styles from './UserFinder.module.css';

import Users from './Users';

const DUMMY_USERS = [
   { id: 'u1', name: 'Max' },
   { id: 'u2', name: 'Manuel' },
   { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
   static contextType = UsersContext;

   constructor() {
      super();
      this.state = {
         filteredUsers: [],
         searchTerm: '',
      };
   }

   searchChangeHandler(e) {
      this.setState({ searchTerm: e.target.value });
   }

   componentDidMount() {
      this.setState({ filteredUsers: this.context.users });
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.searchTerm !== this.state.searchTerm) {
         const filteredUsers = this.context.users.filter((user) =>
            user.name.toLowerCase().includes(this.state.searchTerm),
         );
         this.setState({ filteredUsers });
      }
   }

   render() {
      return (
         <Fragment>
            <div className={styles.finder}>
               {' '}
               <input type="search" onChange={this.searchChangeHandler.bind(this)} />
            </div>
            <ErrorBoundary>
               {' '}
               <Users users={this.state.filteredUsers} />
            </ErrorBoundary>
         </Fragment>
      );
   }
}

// const UserFinder = () => {
//    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//    const [searchTerm, setSearchTerm] = useState('');

//    useEffect(() => {
//       setFilteredUsers(DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(searchTerm)));
//    }, [searchTerm]);

//    const searchChangeHandler = (event) => {
//       setSearchTerm(event.target.value);
//    };

//    return (
//       <Fragment>
//          <div className={styles.finder}>
//             {' '}
//             <input type="search" onChange={searchChangeHandler} />
//          </div>
//          <Users users={filteredUsers} />
//       </Fragment>
//    );
// };

export default UserFinder;
