import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const Backdrop = (props) => {
   return <div className={styles.modal__backdrop} onClick={props.dismissFn}></div>;
};

const ModalOverlay = (props) => {
   return (
      <Card className={styles.modal}>
         <div className={styles.modal__header}>
            <h1>{props.title}</h1>
         </div>
         <div className={styles.modal__description}>
            <p>{props.description}</p>
         </div>
         <div className={styles.modal__controls}>
            <Button onClick={props.dismissFn}>Okay</Button>
         </div>
      </Card>
   );
};

const Modal = (props) => {
   return (
      <React.Fragment>
         {ReactDOM.createPortal(
            <Backdrop dismissFn={props.dismissFn} />,
            document.getElementById('modal-backdrop-root'),
         )}
         {ReactDOM.createPortal(
            <ModalOverlay title={props.title} description={props.description} dismissFn={props.dismissFn} />,
            document.getElementById('modal-overlay-root'),
         )}
      </React.Fragment>
   );
};

export default Modal;
