import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://miro.medium.com/fit/c/262/262/0*LGXcOhYLdFkoueMl' alt='Daiane Barizon' />
      <div>
        <strong>Daiane Barizon</strong>
         <p><img src='icons/level.svg' alt='level' />Level 1</p>
      </div>
    </div>
  )
}