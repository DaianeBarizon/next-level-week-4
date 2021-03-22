import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  /* padStart caso não tenha 2 caracteres, adiciona 0 */
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }


  useEffect(() => { 
    if(isActive && time > 0){
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if(isActive && time === 0) {
      console.log('finalizou!');
      setHasFinished(true);
      setIsActive(false);
    }

    console.log(isActive);
  }, [isActive, time]);

  return (
    <>
    <div className={styles.countdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
        <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>

    {/* && verifica apenas o then */}
    {hasFinished ? (
      <button 
        disabled
        className={styles.countdownButton}
      >
        <p>Ciclo encerrado <img src='icons/check.svg' alt='level' /></p>
      </button>
    ) : (
      isActive ? (
        <button 
          type='button'
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountDown}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button 
          type='button'
          className={styles.countdownButton}
          onClick={startCountDown}
        >
          Iniciar um ciclo
        </button>
      )
    )}
    </>
  )
}