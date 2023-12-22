import React from "react";
import Image from "next/image";
import { Pulse, Skull, Alien, Planet } from "@/constants/icons";
import Link from "next/link";
import styles from "./CharacterCard.module.scss";
import cn from "classnames";

const CharacterCard = () => {
  return (
    <div className={cn(styles.characterCard)}>
      <Link href="/characters/1">
        <Image
          className={cn(styles.characterCardImage)}
          src="https://rickandmortyapi.com/api/character/avatar/12.jpeg"
          width={150}
          height={150}
          alt="Character Image"
        />
        <div className={cn(styles.characterCardTitle)}>Sanchez</div>
        <div className={cn(styles.characterCardInformation)}>
          <div className={cn(styles.characterCardInformationRow)}>
            <Pulse />
            <span>Human</span>
          </div>
          <div className={cn(styles.characterCardInformationRow)}>
            <Alien />
            <span>Human</span>
          </div>
          <div className={cn(styles.characterCardInformationRow)}>
            <Planet />
            <span>Human</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
