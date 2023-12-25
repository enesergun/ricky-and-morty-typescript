import React, { useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import cn from "classnames";
import styles from "./Characters.module.scss";
import CharacterSlider from "@/components/Swiper/CharacterSlider";
import { useDispatch } from "react-redux";
import { setCharactersInResidentsList } from "@/redux/features/characters/charactersSlice";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCharactersInResidentsList(data));
  }, []);

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
