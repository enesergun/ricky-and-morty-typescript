import React from "react";
import SectionTitle from "@/components/SectionTitle";
import CharacterCard from "@/components/Cards/CharacterCard";
import cn from "classnames";
import styles from "./Characters.module.scss";

interface CharactersProps {
  seeAll: string;
  title?: string;
}

const Characters: React.FC<CharactersProps> = ({
  seeAll,
  title = "Characters",
}) => {
  return (
    <div className={cn(styles.characters)}>
      <SectionTitle sectionId="characters" title={title} seeAll={seeAll} />
      <div className={styles.characterCardWrapper}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  );
};

export default Characters;
