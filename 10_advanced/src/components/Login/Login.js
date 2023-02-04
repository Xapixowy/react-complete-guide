import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const Login = (props) => {
   const ctx = useContext(AuthContext);

   const emailInputRef = useRef();
   const passwordInputRef = useRef();
   // const [enteredEmail, setEnteredEmail] = useState('');
   // const [emailIsValid, setEmailIsValid] = useState();
   // const [enteredPassword, setEnteredPassword] = useState('');
   // const [passwordIsValid, setPasswordIsValid] = useState();
   const [formIsValid, setFormIsValid] = useState(false);

   const [emailState, dispatchEmail] = useReducer(
      (state, action) => {
         if (action.type === 'USER_INPUT') return { value: action.value, isValid: action.value.includes('@') };
         else if (action.type === 'INPUT_BLUR') return { value: state.value, isValid: state.value.includes('@') };
         return { value: '', isValid: false };
      },
      { value: '', isValid: undefined },
   );

   const [passwordState, dispatchPassword] = useReducer(
      (state, action) => {
         if (action.type === 'USER_INPUT') return { value: action.value, isValid: action.value.trim().length > 6 };
         else if (action.type === 'INPUT_BLUR') return { value: state.value, isValid: state.value.trim().length > 6 };
         return { value: '', isValid: false };
      },
      { value: '', isValid: undefined },
   );

   const { isValid: emailIsValid } = emailState;
   const { isValid: passwordIsValid } = passwordState;

   useEffect(() => {
      const timeout = setTimeout(() => {
         setFormIsValid(emailIsValid && passwordIsValid);
      }, 250);
      return () => clearTimeout(timeout);
   }, [emailIsValid, passwordIsValid]);

   const emailChangeHandler = (event) => {
      dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
      // setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
   };

   const passwordChangeHandler = (event) => {
      dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
      // setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
   };

   const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
   };

   const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
   };

   const submitHandler = (event) => {
      event.preventDefault();
      if (formIsValid) {
         ctx.onLogin(emailState.value, passwordState.value);
      } else if (!emailState.isValid) {
         emailInputRef.current.focus();
      } else {
         passwordInputRef.current.focus();
      }
   };

   return (
      <Card className={classes.login}>
         <form onSubmit={submitHandler}>
            <Input
               ref={emailInputRef}
               type="email"
               id="email"
               label="Email"
               isValid={emailState.isValid}
               value={emailState.value}
               onChange={emailChangeHandler}
               onBlur={validateEmailHandler}
            />
            <Input
               ref={passwordInputRef}
               type="password"
               id="password"
               label="Password"
               isValid={emailState.isValid}
               value={passwordState.value}
               onChange={passwordChangeHandler}
               onBlur={validatePasswordHandler}
            />
            <div className={classes.actions}>
               <Button type="submit" className={classes.btn}>
                  Login
               </Button>
            </div>
         </form>
      </Card>
   );
};

export default Login;
