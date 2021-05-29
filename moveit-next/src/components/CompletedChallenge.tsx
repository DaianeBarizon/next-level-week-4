import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/CompletedChallenge.module.css";

export function CompletedChallenge() {
  const { challengesCompleted } = useContext(ChallengesContext);

    return (
      <div className={styles.completedChallengeContainer}>
        <span>Desafios completos:</span>
        <span>{challengesCompleted}</span>
      </div>
    );
  }