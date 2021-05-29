import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src='https://miro.medium.com/fit/c/262/262/0*LGXcOhYLdFkoueMl' alt='Daiane Barizon' />
      <div>
        <strong>Daiane Barizon</strong>
         <p><img src='icons/level.svg' alt='level' />Level {level}</p>
      </div>
    </div>
  )
}
