'use client'
import { useState } from "react";
import styles from "./style.module.css";
import { ChevronDown } from "lucide-react";

export default function Accordion({ question, answer,icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      
      <button 
        className={styles.accordionHeader} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.accordion_question}>
              <div className={styles.accordion_icon}>{icon}</div>
              <div>{question}</div>
        </div>
      
      
        <ChevronDown 
          className={`${styles.icon} ${isOpen ? styles.rotate : ""}`} 
          size={20} 
        />
      </button>

      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
