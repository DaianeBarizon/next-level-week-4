import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChanllengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  console.log('type', activeChallenge);

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type='button'
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
              onClick={resetChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
        ) : (
        <div className={styles.challengeNoActive}>
          <strong>Finalize um ciclo para receber desafios a serem completados</strong>
          <p><img src='icons/level-up.svg' alt='Level Up'/>Avance de level completando desafios.</p>
        </div>
        ) }
    </div>
  )
}
