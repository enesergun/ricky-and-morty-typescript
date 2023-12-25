import React from "react";
import cn from "classnames";
import styles from "./SummaryCharacterCard.module.scss";
import Image from "next/image";
import { Arrow } from "@/constants/icons";
import Link from "next/link";

interface SummaryCharacterCardProps {
  data: {
    // Define the structure of your character data based on the actual API response
    // Example:
    id: number;
    name: string;
    image: string;
    planet: string;
    qualification: string;
    location: {
      name: string;
    };
    species: string;
    gender: string;
    // ...
  };
}

const SummaryCharacterCard: React.FC<SummaryCharacterCardProps> = ({
  data,
}) => {
  return (
    <div className={styles.summaryCharacterCard}>
      <div className={styles.characterHeader}>
        <div className={styles.characterCardImageWrapper}>
          <Image
            className={cn(styles.characterCardImage)}
            src={data.image} // Update with the actual data structure
            width={70}
            height={50}
            alt="Character Image"
          />
        </div>
        <div className={cn(styles.characterTitleWrapper)}>
          <div className={cn(styles.characterName)}>{data.name}</div>
          <div className={cn(styles.characterPlanet)}>{data.location.name}</div>
          <div className={cn(styles.characterQualification)}>
            {data.species} / {data.gender}
          </div>
        </div>
      </div>
      <Link href={`/characters/${data.id}`}>
        <Arrow />
      </Link>
    </div>
  );
};

export default SummaryCharacterCard;
