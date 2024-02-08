import React, { useState } from 'react';
import styles from './EndScreen.module.css';
import { useSelector } from 'react-redux';

const EndScreenDisplay = () => {
  const [team, setTeam] = useState()

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1 className={styles.text}>{teamList}</h1>
        {
            console.log(team)
        }
      </div>
      <div className={styles.container2}></div>
      <div className={styles.container3}></div>
      <div className={styles.container4}></div>
      <div className={styles.container5}></div>
    </div>
  );
};

export default EndScreenDisplay;
