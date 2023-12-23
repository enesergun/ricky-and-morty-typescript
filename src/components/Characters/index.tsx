import React from "react";
import SectionTitle from "@/components/SectionTitle";
import CharacterCard from "@/components/Cards/CharacterCard";
import cn from "classnames";
import styles from "./Characters.module.scss";
import Pagination from "@/components/Elements/Pagination";
import CharacterSlider from "@/components/Swiper/CharacterSlider";

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
      <div className={styles.sliderWrapper}>
        <CharacterSlider data={[1, 2, 3, 4, 5, 6, 7]} />
      </div>
    </div>
  );
};

export default Characters;
