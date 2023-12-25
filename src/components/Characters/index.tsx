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
  data?: Array<object> | undefined;
}

const Characters: React.FC<CharactersProps> = ({
  seeAll,
  title = "Characters",
  data,
}) => {
  return (
    <div className={cn(styles.characters)}>
      <SectionTitle sectionId="characters" title={title} seeAll={seeAll} />
      <div className={styles.sliderWrapper}>
        <CharacterSlider data={data} />
      </div>
    </div>
  );
};

export default Characters;
