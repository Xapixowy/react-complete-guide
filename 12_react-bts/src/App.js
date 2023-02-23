import React from 'react';

import './App.css';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
   const [isParagraphShown, setIsParagraphShown] = React.useState(false);
   const [isToggleAllowed, setIsToggleAllowed] = React.useState(false);

   const paragraphVisibilityHandler = React.useCallback(() => {
      if (isToggleAllowed) {
         setIsParagraphShown((prevState) => !prevState);
      }
   }, [isToggleAllowed]);

   const toggleAllowanceHandler = React.useCallback(() => {
      setIsToggleAllowed(true);
   }, []);

   console.log('APP');

   return (
      <div className="app">
         <h1>Hi there!</h1>
         <DemoOutput show={isParagraphShown} />
         <Button onClick={toggleAllowanceHandler}>Allow toggle!</Button>
         <Button onClick={paragraphVisibilityHandler}>Toggle Paragraph!</Button>
      </div>
   );
}

export default App;
