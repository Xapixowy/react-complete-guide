import React from 'react';

import styles from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
   const [btnIsHighlighted, setBtnIsHighlighted] = React.useState(false);
   const cartCtx = React.useContext(CartContext);

   const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

   React.useEffect(() => {
      if (cartCtx.items.length === 0) {
         return;
      }
      setBtnIsHighlighted(true);
      const timer = setTimeout(() => setBtnIsHighlighted(false), 300);

      return () => {
         clearTimeout(timer);
      };
   }, [cartCtx.items]);

   const numberOfCartItems = cartCtx.items.reduce((acc, item) => {
      return (acc += item.amount);
   }, 0);

   return (
      <button className={btnStyles} onClick={props.onClick}>
         <span className={styles.icon}>
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className={styles.badge}>{numberOfCartItems}</span>
      </button>
   );
};

export default HeaderCartButton;
