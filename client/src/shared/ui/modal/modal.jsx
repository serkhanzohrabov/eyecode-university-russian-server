'use client'
import styles from './style.module.css';
import Avatar from '../Avatar/avatar';
import { useState } from 'react';

export default function Modal({isOpen,onClose, children }) {
  

 

    if (!isOpen) return null;
 
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                
                <div className={styles.modal_avatar}>
                     <Avatar
                src={'/rh-robo.png'}
                w={40}
                h={40}
                alt='logo'
                /> @команда eyecode
                </div>
                {children}
                <button className={styles.modal_close} onClick={()=>{onClose(current=>!current)}}>
                    Закрыть
                </button>
            </div>
        </div>
    );
}
