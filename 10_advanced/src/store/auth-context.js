import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
   isLoggedIn: false,
   onLogout: () => {},
   onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
   const storedIsUserLoggedIn = sessionStorage.getItem('isLoggedIn');

   useEffect(() => {
      if (storedIsUserLoggedIn === 'true') {
         setIsLoggedIn(true);
      }
   }, [storedIsUserLoggedIn]);

   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const loginHandler = (email, password) => {
      sessionStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
   };

   const logoutHandler = () => {
      sessionStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
   };

   return (
      <AuthContext.Provider
         value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler,
         }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
