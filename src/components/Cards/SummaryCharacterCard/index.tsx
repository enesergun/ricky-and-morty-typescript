import React from "react";
import cn from "classnames";
import styles from "./SummaryCharacterCard.module.scss";
import Image from "next/image";
import { Arrow } from "@/constants/icons";
const SummaryCharacterCard = () => {
  return (
    <div className={styles.summaryCharacterCard}>
      <div className={styles.characterHeader}>
        <Image
          className={cn(styles.characterCardImage)}
          src="https://rickandmortyapi.com/api/character/avatar/12.jpeg"
          width={70}
          height={50}
          alt="Character Image"
        />
        <div className={cn(styles.characterTitleWrapper)}>
          <div className={cn(styles.characterName)}>Japhets Grandson</div>
          <div className={cn(styles.characterPlanet)}>Planet Earth</div>
          <div className={cn(styles.characterQualification)}>Human / Male</div>
        </div>
      </div>
      <Arrow />
    </div>
  );
};

export default SummaryCharacterCard;
