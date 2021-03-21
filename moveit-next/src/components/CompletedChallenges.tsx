import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return (
    <header className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </header>
  )
}